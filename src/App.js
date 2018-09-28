import React, { Component } from 'react';
// import logo from './logo.svg';
// import TestDataTable from './TestDataTable';
import { Button, Alert, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Alert color="primary">This is a DEVELOPMENT TEST SITE</Alert>
        {/* <h1>This shows that CI works!</h1>
        <h2>This is a dog picture!</h2>
        <h3>Hi Peter</h3>
        <img href="https://www.dogbreedinfo.com/images27/CorgidorYellowLabWelshCorgiMixHybridDogAnnabelle12YearsOld.jpg" /> */}
        <div>
          <Card>
            <CardBody>
              <CardTitle>Video</CardTitle>
              <CardSubtitle>Hackerman Video</CardSubtitle>
            </CardBody>
            <CardBody>
              <CardText><iframe title="hackerman" width="560" height="315" src="https://www.youtube.com/embed/KEkrWRHCDQU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></CardText>
              <Button onClick={()=>{window.location="https://www.youtube.com/watch?v=KEkrWRHCDQU"}}>LINK</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
