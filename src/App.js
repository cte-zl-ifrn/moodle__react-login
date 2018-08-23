import React, { Component } from 'react';
import './css/Styles.css';
import Academico from './pages/Academico';
import Presencial from './pages/Presencial';
import Proitec from './pages/Proitec';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      academico: true,
      presencial: false,
      proitec: false
    };
  }

  academicoButton = () => {
    this.setState({
      academico: true,
      presencial: false,
      proitec: false
    });
  }

  presencialButton = () => {
    this.setState({
      academico: false,
      presencial: true,
      proitec: false
    });
  }

  proitecButton = () => {
    this.setState({
      academico: false,
      presencial: false,
      proitec: true
    });
  }

  getQueryVariable = (variable) => {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
    }
    return(false);
  }

  render() {
    return (
      <div>
          { this.state.academico ?
          <Academico presencialBtn={this.presencialButton}
                     proitecBtn={this.proitecButton} /> 
                     : null}

          { this.state.presencial ?
          <Presencial academicoBtn={this.academicoButton}
                      proitecBtn={this.proitecButton} /> 
                      : null}

          { this.state.proitec ?
          <Proitec academicoBtn={this.academicoButton}
                   presencialBtn={this.presencialButton} /> 
                  : null}                  
      </div>
    );
  }
}

export default App;
