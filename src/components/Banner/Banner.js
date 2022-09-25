import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../Button/Button';

const Banner = (props) => {
    return(
        <div className="main-banner">
            <Row>
                <Col lg={7}>
                    <div className="header-text">
                      <h6>{props.titulo}</h6>
                        <h4><em>{props.tituloDestaque}</em> {props.desc}</h4>
                        <Button url="/" titulo="Browser Now"/>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Banner