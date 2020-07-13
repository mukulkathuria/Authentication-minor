import styled from 'styled-components';

export const UserDiv = styled.div`
    position:absolute;
    background-color:white;
    color:black;
    z-index:1;
    right:0;
    width:140px;
    line-height:2;
    border-radius:5px;
    div{
        border-radius:5px;
    }
    a div:hover{
        background-color:#22E7F4;
    }
    .signed{
        background-color:#f1f1f1;
        line-height:1.4;
    }
`;