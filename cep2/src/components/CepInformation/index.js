import React from "react"

function CepInformation({ localidade, uf, logradouro, bairro, ddd }) {
    return (
        <div className="card mt-3">
            <div className="card-header">Informações do Cep</div>
            <div className="card-body">
                <strong>Localidade: </strong> {localidade} <br />
                <strong>UF: </strong> {uf} <br />
                <strong>Logradouro: </strong> {logradouro} <br />
                <strong>Bairro: </strong> {bairro} <br />
                <strong>DDD: </strong> {ddd}
            </div>
        </div>);
}

export default CepInformation;