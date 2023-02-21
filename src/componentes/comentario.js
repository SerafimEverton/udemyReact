import React from "react";
import {formatRelative} from 'date-fns'


import './comentario.css'
import imagem from './images.jfif'
import ptBR from "date-fns/locale/pt-BR";

const Comentario = props =>

<div className="comentario">
<img class="avatar" src={imagem} alt={props.nome}/>
<div class="conteudo">
<h2 class="nome">{props.nome}</h2>
<p class="sobrenome">{props.sobrenome}</p>
<p class="email">{props.email}</p>
<p class= "data">{formatRelative(props.data, new Date(), {locale: ptBR})}</p>
<p>{props.children}</p>
<button onClick={props.onRemove}>&times;</button>
</div>
</div> 



export default Comentario