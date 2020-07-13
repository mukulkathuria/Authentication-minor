import styled from 'styled-components';
import bgimage from '../../images/bgimage.jpg';

export const BackgroundDiv = styled.div`
    background-image:url(${bgimage});
    height:100vh;
    width:100%;
    background-size:cover;
    position:relative;
`;
export const MainHeading = styled.div`
        font-size:2rem;
        position:absolute;
        top:40%;
        left:8%;
        width:30rem;
        p{
            width:80%;
            margin:1rem 0;
            font-size:0.7em;
        }
`;