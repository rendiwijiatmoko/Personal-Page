import React, {useState} from 'react';
import { Container, Navbar, TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from 'classnames';
import Education from './Education';
import Experience from './Experience';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle =(tab)=>{
    if(activeTab !== tab){
      setActiveTab(tab)
    }
  }

  return (
      <Container>
        <Nav tabs className="justify-content-center">
        <br />
          <NavItem>
            <NavLink className={classnames({ active: activeTab === '1' })}
                     onClick={() => { toggle('1'); }}>
              <h2 style={{color:'#767676'}}>EDUCATIONS</h2>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: activeTab === '2' })}
                     onClick={() => { toggle('2'); }}>
              <h2 style={{color:'#767676'}}>EXPERIENCES</h2>
            </NavLink>
          </NavItem>
          <NavItem>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Education />
          </TabPane>
          <TabPane tabId="2">
            <Experience />
          </TabPane>
        </TabContent>
      </Container>
    )
}

export default Profile;