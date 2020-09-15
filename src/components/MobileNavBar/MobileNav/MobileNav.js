import React, { Children } from 'react';
import { Link } from "react-scroll";
import styled from "styled-components";

const Menu = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  -webkit-box-shadow: 0px 3px 3px #a0a0a0;
  -moz-box-shadow: 0px 3px 3px #a0a0a0;
  box-shadow: 0px 3px 3px #a0a0a0;
  height: 40vh;
  background-color: white;
  visibility: ${props => (props.opened ? 'visibile' : 'hidden')};
  transform: translateY(${props => (props.opened ? '0%' : '-100%')});
  transition: all 0.1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  
`;

function MobileNav({children, open}) {
    return (
        <Menu opened={open}>
          {children}
        </Menu>
    )
}

export default MobileNav;
