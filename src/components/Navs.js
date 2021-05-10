import React from 'react'
import { useLocation } from 'react-router';
import { NavList, LinkedStyled} from './Nav.styled';

const LINKS = [
         { to: '/' ,text : 'Home' },
         { to : '/Starred' , text : 'Starred'},
         
     ];
const Navs = () => {
     const location = useLocation();
    return (
        <div>
            <NavList>
                {LINKS.map((item) => 
                      <li key={item.to}><LinkedStyled to={item.to} className={item.to === location.pathname ? 'active' : ''}>{item.text}</LinkedStyled></li>
                )}
              
            </NavList>
        </div>
    )
}

export default Navs