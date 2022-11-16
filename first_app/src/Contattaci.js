import React from 'react';

// classe ES6 per definire un componente
class Contattaci extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        nome:'',
        cognome:'',
        email:'',
        richiamami: true,
        cell: 0
      };
  
      // Necessario per accedere al corretto valore di this all'interno della callback
      this.handleInputChange = this.handleInputChange.bind(
        this
      );
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      // senza la bind this potrebbe essere undefined
      this.setState({
        [name]: value
      });
    }
    render() {
      // In generale, se ti riferisci ad un metodo senza () dopo di esso,
      // per esempio onChange = {this.handleInputChange}, 
      // potresti aver bisogno di applicare bind a quel metodo

      let nome;
      let cognome;
      let email;
      let richiamami;
      let cell;

      if(this.state.nome) {
        nome = <div> <b> Nome: </b> {this.state.nome}</div>;
      }

      if(this.state.cognome) {
        cognome = <div> <b> Cognome: </b> {this.state.cognome}</div>;
      }

      if(this.state.email) {
        email = <div> <b> Email: </b>  {this.state.email}</div>;
      }

      if(this.state.richiamami) {
        richiamami = <div> <b> Richiamami: </b>  Si </div>;
      }else{
        richiamami = <div> <b> Richiamami: </b>  No </div>;
      }
      
      if(this.state.cell) {
        cell = <div> <b> Num Cell: </b>  {this.state.cell}</div>;
      }

      return (
          <div className="container">
              <h2> Form </h2>
                    <form>
                        <label> Nome:  </label>
                        <br />
                        <input name="nome" type="text"
                        checked={this.state.nome}
                        onChange={this.handleInputChange} />                       
                        <br />
                        <br />
                        <label> Cognome:  </label>                        
                        <br />
                        <input name="cognome" type="text"
                        checked={this.state.cognome}
                        onChange={this.handleInputChange} />                       
                        <br />
                        <br />
                        <label> Email:  </label>
                        <br />
                        <input name="email" type="text"
                        checked={this.state.email}
                        onChange={this.handleInputChange} />                       
                        <br />
                        <br />
                        <label> Richiamami  </label>
                        <br />
                        <input name="richiamami" type="checkbox"
                        checked={this.state.richiamami}
                        onChange={this.handleInputChange} />                       
                        <br />
                        <br />
                        <label> Num Cell: </label>
                        <br />
                        <input name="cell" type="number"
                        value={this.state.cell}
                        onChange={this.handleInputChange} />  
                        <br />
                        <br />                      
                    </form>

                <h2> Riepilogo </h2>

                {nome}
                {cognome}
                {email}               
                {richiamami}
                {cell}
               
        </div>
      );
    }
  }

  export { Contattaci }; 