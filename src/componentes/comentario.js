import React from "react";
import './comentario.css'

const Comentario = props =>

<div className="comentario">
<h2>{props.nome}</h2>
<p>{props.sobrenome}</p>
<p>{props.email}</p>
<p>{props.data.toString()}</p>
<p>{props.children}</p>

</div> 



export default Comentario