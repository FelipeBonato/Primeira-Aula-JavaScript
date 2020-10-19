import React, { useState } from 'react';

export function SearchBox() {
    const [cep, setCep] = useState("")
    return (
        <div className="input-group mb-3">
            <input
                value={cep}
                onChange={evento => setCep(evento.target.value)}
                type="text"
                class="form-control"
                placeholder="Digite o cep para buscar"
            />

            <div className="input-group-append">
                <button
                    className="btn btn-dark"
                    type="button"
                    onClick={function (evento) {
                       console.log('clicando') //getCepInfoByCepNumber(valorCep)
                    }}
                >
                    Verificar
        </button>
            </div>
        </div>);
}