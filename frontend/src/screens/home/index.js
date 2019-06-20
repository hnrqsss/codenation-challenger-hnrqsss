import React from 'react'
import {
    Container,
    Label,
    Input,
    Group,
    Button
} from './styles'

import FormSendFile from '../../components/formSendFile'

const Home = ({ 
    cifrado, 
    decifrado, 
    token, 
    resume, 
    isDecifrado,
    
    //functions
    decifrar
}) => {
    return(
        <Container>
            <Group>
                <Label htmlFor='cifrado'>Cifrado:</Label>
                <Input name='cifrado' value={cifrado}/>
            </Group>

            <Group>
                <Label htmlFor='decifrado'>Decifrado:</Label>
                <Input name='decifrado' value={decifrado}/>
            </Group>

            <Group>
                <Label htmlFor='resume'>Sha1:</Label>
                <Input name='resume' value={resume} rows={2} />
            </Group>

            
            <Button onClick={decifrar} >Decifrar</Button>
            
            {isDecifrado && <FormSendFile token={token} />}
        </Container>
    )
}

export default Home