import { Link } from 'react-router-dom';
import "../../CSS/navbar.css"
import { useState } from 'react';
const Navbar = () => {
    var styling = {
        textDecoration: "none",
        listStyleType: "none",
        textAlign: "center"
    };
    var [dropdown, showDropdown] = useState(true)
    const toggleDrop = () => {
        showDropdown(dropdown => !dropdown)
    }
    return (
        <header>
            <nav>
                <ol style={styling}>
                    <li><Link to="/" className='link'>Home</Link></li>
                    <li><Link to="/about" className='link'>About</Link></li>
                    <li><Link to="/gallery" className='link'>Gallery</Link></li>
                    <li><Link to="/contact" className='link'>Contact</Link></li>
                    <li><Link to="/sign-up" className='link'>Sign-up</Link></li>
                    <div>
                        <span onMouseEnter={toggleDrop} onMouseLeave={toggleDrop}>Hooks</span>
                        {dropdown && (
                            <ul>
                                <li><Link to="/usestate" >useState</Link></li>
                                <li><Link to="/useEffect">useEffect</Link></li>
                                <li><Link to="/useeffectapi">useEffectApi</Link></li>                      
                                <li><Link to="/UseRef">UseRef</Link></li>
                                <li><Link to="/UseMemo">UseMemo</Link></li>
                                <li><Link to="/UseReducer">UseReducer</Link></li>
                                <li><Link to="/UseCallback">UseCallback</Link></li>
                                <li><Link to="/List">List</Link></li>

                    </ul>)}
                    </div>
                </ol>
            </nav>
        </header>
    );
};
export default Navbar;