import React, { Component } from 'react';
import './css/Styles.css';
import Academico from './pages/Academico';
import Presencial from './pages/Presencial';
import Proitec from './pages/Proitec';

class App extends Component {
  constructor(props) {
    super(props);
    
      this.getQueryVariable('ava') === 'presencial' ?
      this.state = {
        academico: false,
        presencial: true,
        proitec: false
      }:
      this.getQueryVariable('ava') === 'proitec' ?
      this.state = {
        academico: false,
        presencial: false,
        proitec: true
      }:
      this.state = {
        academico: true,
        presencial: false,
        proitec: false
      }
    
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
            if(pair[0] === variable){return pair[1];}
    }
    return(false);
  }

  // Actions

  blurText = (event) => {
    let value = event.target.value;

    value.length > 0 ?
    document.getElementById('text').classList.add('used'):
    document.getElementById('text').classList.remove('used');
  }

  blurPassword = (event) => {
    let value = event.target.value;

    value.length > 0 ?
    document.getElementById('password').classList.add('used'):
    document.getElementById('password').classList.remove('used');
  }

  render() {
    return (
      <div>
          { this.state.academico ?
          <Academico presencialBtn={this.presencialButton}
                     proitecBtn={this.proitecButton}
                     blurText={this.blurText}
                     blurPassword={this.blurPassword} /> 
                     : null}

          { this.state.presencial ?
          <Presencial academicoBtn={this.academicoButton}
                      proitecBtn={this.proitecButton}
                      blurText={this.blurText}
                      blurPassword={this.blurPassword} /> 
                      : null}

          { this.state.proitec ?
          <Proitec academicoBtn={this.academicoButton}
                   presencialBtn={this.presencialButton}
                   blurText={this.blurText}
                   blurPassword={this.blurPassword} /> 
                  : null}                  
      </div>
    );
  }
}

export default App;
