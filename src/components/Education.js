import React from 'react';
import {Container, Row, Col, Media} from 'reactstrap';
import moment from 'moment';
import educations from '../contents/educations';

const Education = () => {
  return <Container>
    <Row>
      <Col>
      <br />
      <h2 className="section-title text-center">EDUCATIONS</h2> <hr />
        {educations.studies.map(function (study, i) {
          return <Media key={i}>
            <Media left top href={study.url}>
              <Media object src={study.logo} alt={study.institute}/>
            </Media>
            <Media body>
              <Media heading>
                <a href={study.url}>{study.institute}</a>
              </Media>
              {
                [
                  {
                    "key": "Graduation Year",
                    "value": study.graduationYear
                  },
                  {
                    "key": "Duration",
                    "value": study.durationInYears + " year(s)"
                  }
                ].map(function (object, i) {
                  return <div>
                    <Row>
                      <Col className="formLabel">{object.key}:</Col>
                    </Row>
                    <Row>
                      <Col>{object.value}</Col>
                    </Row>
                  </div>
                })
              }
            </Media>
          </Media>
        })}
      </Col>
    </Row>
    <br/>
    <br/>
    <Row>
      <Col>
      <h2 className="section-title text-center">CERTIFICATE</h2>
        <hr/>
        {educations.certifications.map(function (certification, i) {
          const verification = certification.verificationLink ?
            <Row>
              <Col>
                <a className="certificateLink" href={certification.verificationLink}>See certificate</a>
              </Col>
            </Row> : "";
          return <Media key={i}>
            <Media left top href={certification.url}>
              <Media object src={certification.logo} alt={certification.title}/>
            </Media>
            <Media body>
              <Media heading>
                <a href={certification.url}>{certification.title}</a>
              </Media>
              <Row>
                <Col>{moment(certification.issueDate).format('MMM YYYY')} - {(certification.expiryDate) ? moment(certification.expiryDate).format('MMM YYYY') : 'Present'}</Col>
              </Row>
              <Row>
                <Col>{certification.issuer}</Col>
              </Row>
              {verification}
            </Media>
          </Media>
        })}
      </Col>
    </Row>
  </Container>
}

export default Education;