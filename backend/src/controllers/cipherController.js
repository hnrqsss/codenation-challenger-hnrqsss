const sha1 = require('sha1')

const { token } = require('../configs/app.json')
const api = require('../utils/api')
const { MIN_LETTER, MAX_LETTER } = require('../utils/constants')
const filePath = '../backend/public/answer.json'

const { validateData } = require('../services/cipherValidator')
const { saveData } = require('../utils/saveData')

module.exports = {
    async index(req, res) {
        try {
            const { data } = await api.get(`/dev-ps/generate-data?token=${token}`)

            saveData(filePath, data)
            
            return res.json(data)

        } catch (error) {
            return res.status(400).json(error.message)
        }
    },

    async decrypt(req, res) {
        try {

            const { string, steps } = req.body

            validateData(string,steps)

            let newString = []    
            let asciCode = ''

            for(let index = 0; index < string.length; index++){

                asciCode = string[index].charCodeAt() - steps
            
                if(asciCode < MIN_LETTER) {
                    const minus = MIN_LETTER - asciCode
                    asciCode = MAX_LETTER - minus + 1
                } 

                if(string[index] === ' ' || string[index] === '.') {
                    asciCode = string[index].charCodeAt()
                }
        
                const letter = String.fromCharCode(asciCode)
                            
                newString[index] = letter
            }

            const decifrado = newString.join("")

            const data = { 
                numero_casas: steps,
                token,
                cifrado: string, 
                decifrado,
                resumo_criptografico: sha1(decifrado)
            }

            saveData(filePath, data)

            return res.json(data)

        }catch(error) {
            return res.status(400).json({ error: error.message })
        }
    }
}