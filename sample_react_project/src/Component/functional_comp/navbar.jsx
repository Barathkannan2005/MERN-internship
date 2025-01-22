import { Link } from 'react-router-dom';
import'../../CSS/navbar.css';
const Navbar = () => {
    var styling = { 
        textDecoration: "none", 
        listStyleType: "none", 
        textAlign: "center"
    };
    return (
        <header>
            <nav>   
                
                <ol style={styling}>
                    <li><Link to="/" className='link'>Home</Link></li>
                    <li><Link to="/about" className='link'>About</Link></li>
                    <li><Link to="/gallery" className='link'>Gallery</Link></li>
                    <li><Link to="/contact" className='link'>Contact</Link></li>
                    <li><Link to="/signup" className='link'>Signup</Link></li>
                </ol> 
            </nav>
        </header>
    );
};
export default Navbar;