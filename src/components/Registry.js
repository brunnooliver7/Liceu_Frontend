import React from 'react';
import Menu from './Menu';
import './css/registry.css';

function Registry() {
    return (
      <div className="registry">
          <Menu />

          <div className="div-registry-form">
            <p>Cadastro de aluno</p>
            <form className="registry-form">
              <input type="text" placeholder="Nome do aluno" />
              <input type="text" placeholder="Data de nascimento" />
              <input type="text" placeholder="Endereço" />
              <input type="text" placeholder="Responsável" />
              <input type="submit" value="Matricular" />
            </form>
          </div>
      </div>
    );
  }
  
  export default Registry;