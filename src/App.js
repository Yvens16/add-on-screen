import React, { Component } from 'react';
import './App.css';
import Picture from './Camera';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import {NavItem, Icon, Navbar, Card, CardTitle } from 'react-materialize';


class App extends Component {
  render() {
  return (
      <div className="App">
    <Navbar brand='logo' right>
    <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
    <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
    <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
    <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
  </Navbar>

  <Card header={<CardTitle reveal image={"../images/student.jpg"} waves='light'/>}
    title="Card Title"
    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
    <p><a href="#">Hello motherfucker</a></p>
</Card>
   
<Card header={<CardTitle reveal image={"../images/anthony.jpg"} waves='light'/>}
    title="Card Title"
    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
    <p><a href="#">This is a link</a></p>
</Card>

<Card header={<CardTitle reveal image={"../images/gradesA.jpg"} waves='light'/>}
    title="Card Title"
    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
    <p><a href="#">This is a link</a></p>
</Card>

      <Picture />

      </div>
    );
  }
}

export default App;
