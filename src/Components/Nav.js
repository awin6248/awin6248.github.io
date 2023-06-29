import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
    <div class='sidebar'>
        <div class='name-icon'>
            <div class='name'>Andrew</div>
            <div class='name'>Kyaw</div>
            <div class='name'>Win</div>
        </div>
        <div class='index'>
            <ul class='page-nav'>
                <li class='page-nav-item'><NavLink to="/andrew-win">01　Home</NavLink></li>
                <li class='page-nav-item'><NavLink to='/andrew-win/printed-works'>02　Printed Works</NavLink></li>
                <li class='page-nav-item'><NavLink to='/andrew-win/drawing'>03　Drawings</NavLink></li>
                <li class='page-nav-item'><NavLink to='/andrew-win/photography'>04　Photography</NavLink></li>
                <li class='page-nav-item'><NavLink to='/andrew-win/video'>05　Video</NavLink></li>
                <li class='page-nav-item'><NavLink to='/andrew-win/cv'>06　CV</NavLink></li>
            </ul>
        </div>
    </div>
    )   
};

export default Nav;