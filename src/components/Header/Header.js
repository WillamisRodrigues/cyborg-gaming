import  Logo from "../../Images/logo.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from "../Menu/Menu";
import Profile from "../Menu/Profile";
import Search from "../Pesquisa/Search";

const Header = () => {
    return(
    <header className="header-area header-sticky">
        <Container>
            <Row>
                <Col>
                    <nav className="main-nav">
                        <a href="/" className="logo">
                            <img src={Logo} alt="" />
                        </a>
                        <div className="search-input">
                        <Search texto="Search..."/>
                        </div>
                        <ul className="nav">
                            <Menu rota="/" verificar="ativo" item="Home" />
                            <Menu rota="/" verificar="" item="Browser" />
                            <Menu rota="/" verificar="" item="Details" />
                            <Menu rota="/" verificar="" item="Streams" />
                            <Profile name="Willamis"/>
                        </ul>   
                        <a href="/" className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    </nav>
                </Col>
            </Row>
        </Container>
    </header>
    )
}

export default Header