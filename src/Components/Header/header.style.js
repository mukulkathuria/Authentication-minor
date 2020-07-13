import styled from "styled-components";

export const HeaderDiv = styled.div`
  width: 100%;
  z-index: 9;
  display:flex;
  position:sticky;
  color:${props => props.bgtheme ? 'white' : 'white'};
  top:0;
  left:0;
  background-color:${props => props.bgtheme ? 'blue' : 'black'};
  button{
      padding:8px;
      cursor:pointer;
      border:0.2px solid #f1f1f1;
      ouline:none;
  }
`;
export const DivContainer = styled.div`
  width:96%;
  margin:auto 2%;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

export const NavLink = styled.div`
  display:flex;
  align-items:center;
  div{
    margin:0 1em;
  }
  a{
    text-decoration:none;
    color:inherit;
  }
`;
export const LeftHeader = styled.div`
  display:flex;
  align-items:center;
`;
export const RightHeader = styled.div`
  display:flex;
  align-items:center;
  div{
    margin:0 1em;
  }
  a{
    text-decoration:none;
    color:inherit;
  }
`;
export const LogoImg = styled.img`
  background-color:inherit;
  width:2em;
`;
export const Themebutton = styled.div`
    :hover{
      cursor:pointer;
    }
    svg{
      font-size:1.3em;
    }
`;
export const UserDetail = styled.div`
    cursor:pointer;
    position:relative;
    svg{
      font-size:1.2em;
    }
    div{
      margin:0;
    }
`;