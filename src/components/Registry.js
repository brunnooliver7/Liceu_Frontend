import React from 'react';
import './css/registry.css';
import Menu from './Menu';

class Registry extends React.Component {

    formSubmit(e) {
        e.preventDefault();
        alert('validação');
    }

    putBorder(input) {
        const inputField = document.querySelector(`#${input.target.id}`);
        inputField.style.border = '1px solid blue';
    }

    removeBorder(input) {
        const inputField = document.querySelector(`#${input.target.id}`);
        inputField.style.border = '1px solid lightgray';
    }

    render() {
        return (
            <div className="registry">
                <Menu />
                <div className="div-registry-form">
                    <p>Cadastro de aluno</p>
                    <form className="registry-form" onSubmit={ this.formSubmit }>
                        <input type="text" placeholder="Nome do aluno" id="name" onFocus={this.putBorder}
                        onBlur={this.removeBorder} required />
                        <input type="text" placeholder="Data de nascimento" id="born" onFocus={this.putBorder}
                        onBlur={this.removeBorder} required />
                        <input type="text" placeholder="Endereço" id="address" onFocus={this.putBorder}
                        onBlur={this.removeBorder} required />
                        <input type="text" placeholder="Responsável" id="sponsor" onFocus={this.putBorder}
                        onBlur={this.removeBorder} required />
                        <input type="submit" value="Maricular" />
                    </form>
                </div>
            </div>
        )
    }

}

export default Registry;