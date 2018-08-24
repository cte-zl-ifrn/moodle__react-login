import React, {Component} from 'react';

class Academico extends Component {
  render() {
    return (
      <div className="App">
        <div id="main">
          <form method="post" action="https://ead.ifrn.edu.br/ava/academico/login/index.php" role="form">
              <div className="group">
                  <h2>ACADÊMICO</h2>
              </div>
              <div className="group">
                  <input type="text" className="form-control" required type="text" name="username" onBlur={this.props.blur} /><span className="highlight"></span><span className="bar"></span>
                  <label>Matrícula</label>
              </div>
              <div className="group">
                  <input className="form-control" type="password" name="password" onBlur={this.props.blur} /><span className="highlight"></span><span className="bar"></span>
                  <label>Senha</label>
              </div>
              <div className="group">
                  <a href="#">esqueci minha senha</a>
                  <br />
              </div>
              <button type="submit" className="button buttonGreen">ACESSAR O MOODLE
                  <div className="ripples buttonRipples"><span className="ripplesCircle"></span></div>
              </button>
          </form>
          <div id="instanciaMoodle">
              <p><img id="logo" src="https://ead.ifrn.edu.br/ava/academico/theme/boost_eadifrn/pix/eadifrn-logo.svg" alt="Logo IFRN EaD" /></p>
              <hr width="80%" />
              <ul>
                  <li><a onClick={this.props.presencialBtn}>Presencial</a></li>
                  <li><a onClick={this.props.proitecBtn}>PROITEC</a></li>
              </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Academico;