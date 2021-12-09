import styled from "styled-components";

export const Educationsection  = styled.div`
    background-color: #161625;
`

export const Educationsectiontop = styled.div`
    padding: 2rem;
`

export const Educationsectionbottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Heading = styled.div`
    justify-content: center;
    display: flex;
    color: #C6FF00;
    font-size: 45px;
`

export const CardEducation = styled.div`
    width: 65%;
    height: 30vh;
    border-radius: 16px;
    /* background: #004E64; */
    background: linear-gradient(103.84deg, #004E64 3.07%, #007C78 98.55%);
    display: flex;
    flex-direction: row;
    margin: 2rem 0 2rem 0;
    overflow: hidden;

    @media only screen and (max-width: 900px) {
    flex-direction: column;
    height: fit-content;
    width: 80%;
    }
`

export const Imagesection = styled.div`
    width: 40%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    
    @media only screen and (max-width: 900px) {
    width: 100%;
    }
`

export const TextSection = styled.div`
    width: 60%;
    color: #fff;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    padding: 2rem;

    @media only screen and (max-width: 900px) {
    width: 100%;
    }
`

export const InstituteName = styled.div`
    font-size: 25px;
    font-weight: 500;
`

export const Degree = styled.div`
    font-size: 20px;
    font-weight: 400;
    /* color: #c6ff00; */
`

export const Branch = styled.div`
    font-size: 20px;
    font-weight: 400;
`

export const Location = styled.div`
    font-size: 18px;
    font-weight:300;
    color: #c6ff00;
`

export const Year = styled.div`
    font-size: 18px;
    font-weight: 300;
    color: #c6ff00;
`


