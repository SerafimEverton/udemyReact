import React, { Component } from "react";
import "./App.css";
import Comentario from "./componentes/comentario";

class App extends Component {
  state = {
    comentarios: [
      {
        nome: "Juca",
        sobrenome: "Bill",
        email: "juca@juca",
        data: new Date(),
        mensagem: "Tarrrdeeeee"
      },
      {
        nome: "Jeca",
        sobrenome: "Boy",
        email: "jeca@jeca",
        data: new Date(),
        mensagem: "Tarrrdeeeee tambem"
      },
      {
        nome: "Joca",
        sobrenome: "Bull",
        email: "joca@joca",
        data: new Date(),
        mensagem: "Pro ces tambem"
      },
    ],
  };

  adicionaComentario =()=>{

    const novoComentario = {
        nome: 'Maria',
        sobrenome: 'Luz',
        email: 'maria@maria',
        data: new Date(),
        mensagem: 'Helllloooooo'
    }

    this.setState({
        comentarios: [ ...this.state.comentarios, novoComentario]
    })

  }

  render() {
    return (
      <div className="App">
        <h1>Meu projeto</h1>

        {this.state.comentarios.map((comentario, indice) => (
          <Comentario
            key = {indice}
            nome={comentario.nome}
            sobrenome={comentario.sobrenome}
            email={comentario.email}
            data={comentario.data}
          >
            {comentario.mensagem}
          </Comentario>
        ))}

        <button onClick={this.adicionaComentario}>Adiciona Comentario</button>

      </div>
    );
  }
}

export default App;
