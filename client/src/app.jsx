import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header';
import Routesss from './routes';
import { BrowserRouter } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
     <div>
      <Header />
      <Routesss />
    </div>
  </BrowserRouter>
   
    );
  }
}

ReactDom.render(<App />, document.getElementById('react-app'));