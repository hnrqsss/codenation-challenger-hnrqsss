import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Group = styled.div`
    width: 80%;
    padding: 20px 0;
`

export const Label = styled.label`
    color: #212133;
    text-transform: uppercase;
    font-weight: 600;
`

export const Input = styled.textarea.attrs((props) => ({
    rows: props.rows || 3,
    disabled: true,
    name: props.name
}))`
    width: 100%;
    border: none;
    border-radius: 20px;
    font-size: 20px;
    padding-top: 10px;
    padding-left: 20px;
    margin-left: -20px;
`

export const Button = styled.button.attrs({
    type: 'button'
})`
    background: ${props => props.background || '#212133'};
    color: #FFF;
    width: 150px;
    height: 40px;
    text-transform: uppercase;
    font-weight: 600;
    border: none;
    border-radius: 20px;
    box-shadow: 1px 2px 4px rgba(0,0,0,0.3);
    margin: 0 auto;
`