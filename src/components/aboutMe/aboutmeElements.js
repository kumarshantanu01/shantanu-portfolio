import styled from "styled-components";

export const AboutmeSection = styled.div`
    width: 100%;
    min-height: 58vh;
    background-color: #161625;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 980px) {
        height: fit-content;
    }
`

export const Container = styled.div`
    width: 70%;
    height: 45vh;
    border-radius: 16px;
    /* background: #004E64; */
    background: linear-gradient(103.84deg, #004E64 3.07%, #007C78 98.55%);
    display: flex;
    flex-direction: row-reverse;

    @media only screen and (max-width: 980px) {
        width: 80%;
        height: fit-content;
        flex-direction: column;
        margin: 2rem 0 3rem 0;
    }
`

export const TextSection = styled.div`
    display: flex;
    width: 50%;
    padding: 2rem ;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    color: #f2f2f2;

    @media only screen and (max-width: 980px) {
        width: 100%;
    }
`

export const Text1 = styled.div`
    font-size: 24px;
    font-weight: 900;
    margin-bottom: 1rem;
`

export const Text2 = styled.div`
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 2rem;
`

export const Text3 = styled.div`
    font-size: 20px;
    font-weight: 400;
`

export const ImageSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;

    @media only screen and (max-width: 980px) {
        width: 100%;
    }
`

export const Card = styled.div`
    overflow: hidden;
`