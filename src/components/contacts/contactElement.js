import styled from "styled-components";

export const Contactsection = styled.div`
    background: #002539;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
`

export const ContactsectionTop = styled.div`
    width: 100%;
    min-height: 30vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 3rem;

    @media only screen and (max-width: 600px) {
        justify-content: flex-start;
    }
`
export const ContactsectionBottom = styled.div`
    height: 8vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Textsection = styled.div`
    /* height: 30vh; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    padding: 1rem;
`

export const Heading = styled.div`
    font-size: 30px;
    color: #C6FF00;
    padding-bottom: 2rem;
`

export const Subheading = styled.div`
    font-size: 17px;
    color: #f6f6f6;
    /* padding-bottom: 1rem; */
    &:hover {
        color: #C6FF00;
        cursor: pointer;
    }
`

export const Contactlinkbox = styled.div`
    /* height: 30vh; */
    color: #f6f6f6;
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
    padding-bottom: 1rem;

    &:hover {
        color: #C6FF00;
        cursor: pointer;
    }
`

export const QuickLink = styled.div`
    /* height: 30vh; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    padding: 1rem;
`

export const Contactme = styled.div`
    /* height: 30vh; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    padding: 1rem;
`

export const Mailbox = styled.div`
    /* height: 30vh; */
    display: flex;
    flex-direction: row;
    color: #fff;
    align-items: center;
    /* justify-content: center; */
    padding-bottom: 1rem;

    &:hover {
        color: #C6FF00;
        cursor: pointer;
    }
`
export const Textmail = styled.div`
    font-size: 20px;
    color: #f6f6f6;
    padding-left: 1rem;

    &:hover {
        color: #C6FF00;
        cursor: pointer;
    }
`

export const Text1 = styled.div`
    font-size: 20px;
    color: #f6f6f6;
    /* padding-left: 1rem; */
    padding-bottom: 1rem;
`

export const Myname = styled.div`
    font-size: 17px;
    color: #C6FF00;
    /* padding-left: 1rem; */
    padding-left: 1rem;
`


