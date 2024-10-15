import styled from "styled-components"

export const Layout = styled.div`
    background: #D9D9D9;
    color: #000;
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
`
export const Container = styled.div`
    background-color: #fff;
    border-radius: 1rem;
    flex-direction: column;
    padding: 1rem;
    display: flex;
    justify-content: start;
    gap: 1rem;
    align-items: center;
    height: 540px;
    width: 400px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
export const Display = styled.div`
    position: relative;
    background-color: #333;
    border-radius: 12px;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 100%;
`
export const Indicator = styled.input`
    position: absolute;
    background-color: transparent;
    border: none;
    width: 20px;
    top: 10px;
    right: 10px;
    color:  white;    
`
export const Content = styled.div`
    border-radius: 12px;
    padding: 8px 0;
    display: flex;
    flex: 1;
    gap: 0.3rem;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
`
export const Button = styled.button`
    flex:1;
    height: 100%;
    cursor: pointer;
    border-radius: 0.3rem;
    border: 0;
    font-size: x-large;
    &:hover{
        filter: brightness(0.9);
    }
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`
export const Input = styled.input`
    font-size: xx-large;
    text-align: start;
    width: 100%;
    border: 0;
    background-color: #333;
    height: 100%;
    color: white;
`