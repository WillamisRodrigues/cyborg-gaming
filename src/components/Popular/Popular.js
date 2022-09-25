import Button from "../Button/Button"
import ItemPopular from "./ItemPopular"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Popular1 from "../../Images/popular-01.jpg"
import Popular2 from "../../Images/popular-02.jpg"
import Popular3 from "../../Images/popular-03.jpg"
import Popular4 from "../../Images/popular-04.jpg"
import Popular5 from "../../Images/popular-05.jpg"
import Popular6 from "../../Images/popular-06.jpg"
import Popular7 from "../../Images/popular-07.jpg"
import Popular8 from "../../Images/popular-08.jpg"
const Popular = () => {
    return(
        <div className="most-popular">
            <Row>
              <Col lg={12}>
                <div className="heading-section">
                  <h4><em>Most Popular</em> Right Now</h4>
                </div>
                <Row>
                  <Col lg={3} sm={6}>
                    <ItemPopular imagem={Popular1} game="Fortnite" categoria="Sandbox" avaliacao={4.8} download=" 2.3M" />
                  </Col>
                  <Col lg={3} sm={6}>
                    <ItemPopular imagem={Popular2} game="PubG" categoria="Battle S" avaliacao={4.8} download=" 2.3M" />
                  </Col>
                  <Col lg={3} sm={6}>
                    <ItemPopular imagem={Popular3} game="Dota2" categoria="Steam-X" avaliacao={4.8} download=" 2.3M" />
                  </Col>
                  <Col lg={3} sm={6}>
                    <ItemPopular imagem={Popular4} game="CS-GO" categoria="Legendary" avaliacao={4.8} download=" 2.3M" />
                  </Col>
                  <Col lg={6}>
                    <div className="item">
                      <Row>
                        <Col lg={6} sm={6}>
                            <ItemPopular imagem={Popular5} game="Mini Craft" categoria="Legendary" avaliacao={4.8} download=" 2.3M" />
                        </Col>
                        <Col lg={6} sm={6}>
                           <ItemPopular imagem={Popular6} game="Eagles Fly" categoria="Matrix Games" avaliacao={4.8} download=" 2.3M" />
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col lg={3} sm={6}>
                    <ItemPopular imagem={Popular7} game="Warface" categoria="Max 3D" avaliacao={4.8} download=" 2.3M" />
                  </Col>
                  <Col lg={3} sm={6}>
                    <ItemPopular imagem={Popular8} game="Warcraft" categoria="Legend" avaliacao={4.8} download=" 2.3M" />
                  </Col>
                  <Col lg={12}>
                    <Button titulo="Discover Popular" url="/"/>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
    )
}

export default Popular