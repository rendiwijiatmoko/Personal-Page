import React from 'react';
import {Container} from 'reactstrap';
import profile from '../contents/profile';

const About = () =>{
  return (
      <div className="intro-header">
          <a name="about"></a>
          <Container>
              <div className="intro-message">
                <h1> Hi, there!</h1>
                <h2>My name is {profile.name}</h2>
                <h3 className="lead">{profile.summary}</h3>
                    {profile.throwlink.map(function(link, id) {
                        return (
                            <div class="list-inline intro-social-buttons" key={id}>
                                <div style={{float:"left"}}>
                                    <a href={link.url} className="btn btn-default btn-lg">{link.title}</a>
                                </div>
                            </div>
                        )
                    })
                }
              </div>
          </Container>
      </div>
  )
}

export default About;