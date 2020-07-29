import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
  
  const valoresIniciais ={
    nome: '',
    descricao: '',
    cor:'', 
  }
  const [values, setValues] = useState(valoresIniciais);
  const [categorias,setCategorias] = useState([]);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  };

  function handleChange(infoDoEvento){
    setValue(
      infoDoEvento.target.getAttribute('name'),
      infoDoEvento.target.value
    );
  }
  
  return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome} </h1>

        <form onSubmit={function handleSubmit(infoDoEvento){
          infoDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);

          setValues({valoresIniciais})
        }}>
          <FormField 
          label="Nome da categoria"
          type="text"
          name="nome"
          value = {values.nome}
          onChange={handleChange}
          />

          <div>
            <label>
              Descriçao:
              <textarea
                type="text"
                value={values.descricao}
                name="descricao"
                onChange={handleChange}
              />
            </label>
          </div>

          <FormField 
          label="Cor"
          type="color"
          name="cor"
          value = {values.cor}
          onChange={handleChange}
          />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice)=>{
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>
      
        <Link to="/">
          Home
        </Link>
      </PageDefault>
    );
  };

  export default CadastroCategoria;