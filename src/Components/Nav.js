import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
    <div class='sidebar'>
        <div class='name-icon'>
            <div class='name'>Andrew</div>
            <div class='name'>Win</div>
        </div>
        <div class='index'>
            <ul class='page-nav'>
                <li class='page-nav-item'><NavLink to="/">01　Home</NavLink></li>
                <li class='page-nav-item'><NavLink to='/photography'>02　Photography</NavLink></li>
                <li class='page-nav-item'><NavLink to='/drawing'>03　Drawings</NavLink></li>
                <li class='page-nav-item'><NavLink to='worksonpaper'>04　Works on Paper</NavLink></li>
                <li class='page-nav-item'><NavLink to='/video'>05　Video</NavLink></li>
            </ul>
        </div>
    </div>
    )   
};

export default Nav;