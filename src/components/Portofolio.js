import React from 'react';
import {
    Container, Card, CardImg, CardText,
    CardBody, CardTitle, Row, Col, Button} from 'reactstrap';
import p from '../contents/portfolio';

const Portofolio = () => {
    return(
        <div>
            <br />
            <hr />
            <Container>
                <a name="portfolio"></a>
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">PORTFOLIO</h2>
                </div>
            <Row>
            
                {p.portfolio.map(function(pt,id){
                    return(
                        <Col sm="6">
                        <Card key={id} style={{border:0}}>
                            <CardImg top height="100%" src={pt.img} alt={pt.title} />
                                <CardBody>
                                    <CardTitle><h3> {pt.title} </h3></CardTitle>
                                    <CardText>{pt.text}</CardText>
                                    <Button href={pt.url}>Check</Button>
                            </CardBody>
                            </Card>
                        </Col>
                    )
                })
                }
            </Row>
            </Container>
            <br />
        </div>
    );
}

export default Portofolio;