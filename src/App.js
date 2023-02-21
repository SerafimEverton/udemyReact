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
        mensagem: "Tarrrdeeeee",
      },
      {
        nome: "Jeca",
        sobrenome: "Boy",
        email: "jeca@jeca",
        data: new Date(),
        mensagem: "Tarrrdeeeee tambem",
      },
      {
        nome: "Joca",
        sobrenome: "Bull",
        email: "joca@joca",
        data: new Date(),
        mensagem: "Pro ces tambem",
      },
    ],
    novoComentario: {
      nome: "",
      sobrenome: "",
      email: "",
      mensagem: "",
    },
  };

  adicionarComentario = (evento) => {
    evento.preventDefault();

    const novoComentario = {...this.state.novoComentario, data: new Date()}

    this.setState({
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: {nome: '', sobrenome: '', email: '', mensagem: ''}  
    });
  };

  removerComentario = comentario => {
    let lista = this.state.comentarios;
    lista = lista.filter(c => c !== comentario )
    this.setState({ comentarios: lista })
  }

  digitacao = evento => {
    const {name, value} = evento.target;
    this.setState({ 
        novoComentario: {...this.state.novoComentario, [name]: value}})
  }

  render() {
    return (
      <div className="App">
        <h1>Meu projeto</h1>

        {this.state.comentarios.map((comentario, indice) => (
          <Comentario
            key={indice}
            nome={comentario.nome}
            sobrenome={comentario.sobrenome}
            email={comentario.email}
            data={comentario.data}
            onRemove={this.removerComentario.bind(this, comentario)}>
            {comentario.mensagem}
          </Comentario>
        ))}

        <form method="post" onSubmit={this.adicionarComentario} className="Novo-Comentario">
          <h2>Adicionar Comentário</h2>
          <div>
            <input 
            type="text" 
            name="nome" 
            value={this.state.novoComentario.nome}
            onChange={this.digitacao}
            required
            placeholder="Digite seu nome" 
            />
          </div>
          <div>
            <input
              type="text"
              name="sobrenome"
              value={this.state.novoComentario.sobrenome}
              onChange={this.digitacao}
              required
              placeholder="Digite seu sobrenome"
            />
          </div>
          <div>
            <input 
            type="email" 
            name="email" 
            value={this.state.novoComentario.email}
            onChange={this.digitacao}
            required
            placeholder="Digite seu email" 
            />
          </div>
          <div>
            <textarea 
            name="mensagem" 
            value={this.state.novoComentario.mensagem}
            onChange={this.digitacao}
            required
            rows="4" />
          </div>

          <button type="submit">Adiciona Comentario</button>
        </form>
      </div>
    );
  }
}

export default App;
