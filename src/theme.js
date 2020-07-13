import styled from 'styled-components';

export const ColorTheme = styled.div` 
        color:${props => props.dark ? 'white' : 'black'};
        background-color:${props => props.dark ? 'black' : 'white'};
`;