import './styleHeader.css'
import logo from '../../assets/neoland_logo.jpeg'

function Header() {
    return <div className="header_container">
        <img className='neoland_logo' src={logo} alt="neoland-logo" />
        <h3>Version 1.0</h3>


    </div>
    
}

export default Header