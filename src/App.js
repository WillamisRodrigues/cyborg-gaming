import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Popular from './components/Popular/Popular';
import Footer from './components/Footer/Footer';
import Library from './components/LibraryGame/Library';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="page-content">
              <Banner titulo="Welcome To Cyborg" tituloDestaque="Browser" desc="Our Popular Games Here"/>
              <Popular/>
              <Library/>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer ano={2036} empresa="Cyborg Gaming" design="TemplateMo" url="/"/>
    </div>
  )
}

export default App;
