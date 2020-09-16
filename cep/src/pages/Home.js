import React, { useState } from 'react'
import { Header } from '../components/Header'

export function Home() {

    const [valorCep, modificaValorCep] = useState("")




    return <div>
        <Header>Cep App</Header>
        <div className="container mt-3">
            <div class="input-group mb-3">
                <input
                    value={valorCep}
                    onChange={function (evt) {
                        modificaValorCep(evt.target.value);
                    }}
                    type="text"
                    class="form-control"
                    placeholder="Digite o cep para buscar" />
                <div class="input-group-append">
                    <button
                        className="btn btn-dark"
                        type="button"
                    >
                        Verificar
                    </button>
                </div>
            </div>

            <div className="card mt-3">
                <div className="card-header">Informações do cep</div>
                <div className="card-body">
                    <strong>Localidade: </strong> {valorCep} <br />
                    <strong>UF: </strong> RS
                </div>
            </div>
        </div>
    </div>
}


