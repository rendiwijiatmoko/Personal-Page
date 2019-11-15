import React from 'react';
import {Container} from 'reactstrap';
import profile from '../contents/profile';

const Skills = () =>{
  return (
      <div>
          <br />
          <Container>
          <div className="text-center">
            <h2 className="section-title">SKILLS</h2><hr />
                <div class="padding2 skill-icon-container text-center">
                    <a className="icon"><img className="ico-skill" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png" alt="reactjs"></img><p>React Native</p></a>
                    <a className="icon"><img className="ico-skill" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/187_Js_logo_logos-512.png" alt="JS"></img><p>JavaScript</p></a>
                    <a className="icon"><img className="ico-skill" src="https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/Python_logo-512.png"></img><p>Python</p></a>
                    <a className="icon"><img className="ico-skill" src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/mysql-512.png"></img><p>MySql</p></a>
                    <a className="icon"><img className="ico-skill" src="https://blog.golang.org/go-brand/Go-Logo/PNG/Go-Logo_Black.png"></img><p>Golang</p></a>
                </div>
            </div>
          </Container>
      </div>
  )
}

export default Skills;