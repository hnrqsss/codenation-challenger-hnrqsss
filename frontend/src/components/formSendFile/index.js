import React from 'react'
const url = 'https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token='

//TODO style it
const FormSendFile = ({ token }) => {
    return (
        <form 
            method="post" 
            enctype="multipart/form-data" 
            action={`${url}${token}`}
        >
            <div>
                <label htmlFor="file">Escolha o arquivo answer.json</label>
                <input 
                    type="file" 
                    id="file" 
                    name="answer" 
                    multiple={false} 
                    accept='.json' 
                />
            </div>
            <div>
                <button>Enviar</button>
            </div>
        </form>
    )
}

export default FormSendFile