import React, { useState } from 'react'
import { Header } from '../components/Header'
import { Load } from '../components/Load'
import CepInformation from '../components/CepInformation'
import { SearchBox } from '../components/SearchBox'

export function Home() {

    const [localidade, modificaLocalidade] = useState("")
    const [uf, modificaUf] = useState("")
    const [logradouro, modificaLogradouro] = useState("")
    const [bairro, modificaBairro] = useState("")
    const [ddd, modificaDDD] = useState("")
    const [load, modificaLoading] = useState(false)

    function getCepInfoByCepNumber(cepNumber) {
        console.log("Fazendo consulta no serviço de CEP com o cep: " + cepNumber);
        modificaLoading(true)

        setTimeout(() => {
            fetch(`https://viacep.com.br/ws/${cepNumber}/json/`)
                .then(response => response.json())
                .then(({ localidade, uf, logradouro, bairro, ddd }) => {
                    modificaLocalidade(localidade)
                    modificaUf(uf)
                    modificaLogradouro(logradouro)
                    modificaBairro(bairro)
                    modificaDDD(ddd)
                    modificaLoading(false)
                })
        }, 3000)
    }


    return <div>
        <Header>Cep App</Header>
        <div className="container mt-3">
           <SearchBox />
            {load ? <Load /> : <CepInformation
                localidade={localidade}
                uf={uf}
                logradouro={logradouro}
                bairro={bairro}
                ddd={ddd}
            />}
        </div>
        <div>

        </div>
    </div>
}


