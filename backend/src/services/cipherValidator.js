const cipherException = (message) => {
    this.message = message
    this.name = "CipherEXCEPTION"
    return this
 }

module.exports = {
    validateData(string, steps) {
        if(!string || string.length === 0)
            throw  cipherException('The string field is required')
            
        if(!steps) 
            throw cipherException('The steps field is required')
    }
}