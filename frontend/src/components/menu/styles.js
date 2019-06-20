import styled from 'styled-components'
import logo from '../../assets/images/logo.svg'

export const Container = styled.div`
    width: 100%;
    height: 80px;
    background: #212133;
    display: flex;
    align-items: center;
`

export const Logo = styled.img.attrs({
    src: logo
})`
    height: auto;
    width: 280px;
    margin-left: 15px;
`