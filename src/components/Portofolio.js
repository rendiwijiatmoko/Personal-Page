import React from 'react';
import {
    Container, Card, CardImg, CardText,
    CardBody, CardTitle, Row, Col} from 'reactstrap';
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
                            <CardImg top width="100%" src='../images/yareeroom.png' alt="img"/>
                                <CardBody>
                                    <CardTitle><h3> {pt.title} </h3></CardTitle>
                                    <CardText>{pt.text}</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                })
                }
            </Row>
            </Container>
        </div>
    );
}

export default Portofolio;