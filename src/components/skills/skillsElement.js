import styled from "styled-components";

/* skills.jsx file styling */

export const Skillssection = styled.div`
    background: #002539;
` 

export const Heading = styled.div`
    justify-content: center;
    display: flex;
    color: #f2f2f2;
    background: #002539;
` 

export const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media only screen and (max-width: 1000px) {
    flex-direction: column;
    }
`

export const SkillsBox= styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1000px) {
        width: 100%;
    }
`

export const SkillsLogo= styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    padding: 4rem;
    justify-content: center;

    @media only screen and (max-width: 1000px) {
        padding: 1rem;
        width:100%;
    }
`
export const SkillsImage= styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1000px) {
        width: 100%;
    }
`

/* skillscard.jsx styling */

export const Cardlogos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem;

    @media only screen and (max-width: 1000px) {
        margin: 1.2rem;
    }
`

export const Text = styled.div`
    color: #f2f2f2;
    font-size: 20px;
    padding-top: 0.5rem;
`