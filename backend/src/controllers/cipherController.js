const sha1 = require('sha1')
const { token } = require('../configs/app.json')
const api = require('../utils/api')
const { MIN_LETTER, MAX_LETTER } = require('../utils/constants')

module.exports = {
    async index(req, res) {
        try {
            const { data } = await api.get(`/dev-ps/generate-data?token=${token}`)
            return res.json(data)
        } catch (error) {
            return res.json(error.message)
        }
    },

    async decrypt(req, res) {
        try {

            const { string, steps } = req.body

            if(!string || string.length === 0) 
                return res.json({ error: 'The string field is required' })

            if(!steps) 
                return res.json({ error: 'The steps field is required' })    

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

            return res.json({ 
                numero_casas: steps,
                token,
                cifrado: string, 
                decifrado,
                resumo_criptografico: sha1(decifrado)
            })

        }catch(error) {
            return res.json({ error: error.message })
        }
    }
}