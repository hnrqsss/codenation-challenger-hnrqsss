const { token } = require('../configs/app.json')
const api = require('../utils/api')

module.exports = {
    async index(req, res) {
        try {
            const { data } = await api.get(`/dev-ps/generate-data?token=${token}`)
            return res.json(data)
        } catch (error) {
            return res.json(error.message)
        }
    }
}