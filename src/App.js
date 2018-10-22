import React, { Component } from 'react';
// import './App.css';
import {Grid, Row, Col} from 'react-bootstrap';
import NavHeader from './components/Header/navHeader'
import NavSide from './components/NavSide/navSide';
import Main from './components/Main';


class App extends Component {

  render() {
    return (
      <div>
        <NavHeader/>
        <Grid>
            <Row className="show-grid">
                <Col xs={3} md={3}>
                    <NavSide/>
                </Col>
                <Col xs={9} md={9}>
                    <Main/>
                </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default App;


        // <NavHeader/>
        // <Dashboard/>

// const Title = () => {
//   return (
//       <div className="title">
//         <h1>React Router demo</h1>
//         <Link to="/list"><button>Show the List</button></Link>
//       </div>
//   )
// }

// const List = () => {
//   return (
//     <div className="nav">
//       <ul>
//         <li>list item</li>
//         <li>list item</li>
//       </ul>
//       <Link to="/"><button>Back Home</button></Link>
//     </div>
//   )
// }

// module.exports = {
//   Title,
//   List
// };