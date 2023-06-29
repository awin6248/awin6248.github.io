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
                <li class='page-nav-item'><NavLink to="/">01　Home</NavLink></li>
                <li class='page-nav-item'><NavLink to='/photography'>02　Printed Works</NavLink></li>
                <li class='page-nav-item'><NavLink to='/drawing'>03　Drawings</NavLink></li>
                <li class='page-nav-item'><NavLink to='worksonpaper'>04　Photography</NavLink></li>
                <li class='page-nav-item'><NavLink to='/video'>05　Video</NavLink></li>
                <li class='page-nav-item'><NavLink to='/cv'>06　CV</NavLink></li>
            </ul>
        </div>
    </div>
    )   
};

export default Nav;