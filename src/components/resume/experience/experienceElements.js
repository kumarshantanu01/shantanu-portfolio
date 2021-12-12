import styled from "styled-components";

export const Timelinesection  = styled.div`
    background-color: #002539;
`

export const Timelinesectiontop  = styled.div`
    padding: 2rem;
`

export const Timelinesectionbottom  = styled.div``

export const Heading = styled.div`
    justify-content: center;
    display: flex;
    color: #C6FF00;
    font-size: 45px;
`

export const Timelinebox  = styled.div`
    /* background-color: #002539; */
	min-height: 100vh;
	padding: 15px 15px 50px 15px;
`

export const Timelinedot  = styled.div`
    height: 16px;
	width: 16px;
	background-color: #C6FF00;
	position: absolute;
	left: calc(50% - 8px);
	border-radius: 50%;
	top:10px;
    z-index: 1;

    @media only screen and (max-width: 767px) {
        left: 0;
    }
`

export const Timelinedate  = styled.div`
    font-size: 18px;
	color: #C6FF00;
	margin:6px 0 15px;
`

export const Timelinecontent  = styled.div`
    background-color:  rgb(0, 124, 120);
	padding: 30px;
	border-radius: 5px;
`

export const Subheading  = styled.div`
    font-size: 20px;
	color: #ffffff;
	margin:0 0 10px;
	text-transform: capitalize;
	font-weight: 500;
`

export const Text  = styled.div`
    color: #c8c8c8;
	font-size: 16px;
	font-weight: 300;
	line-height: 22px;
`