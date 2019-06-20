import styled from 'styled-components'
import preloader from '../../assets/images/preloader.gif'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.1);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Icon = styled.img.attrs({
    src: preloader
})`
    width: 80px;
    height: auto;
`