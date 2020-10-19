import React from 'react'

export function Header({ children }) {
    return <header>
        <nav className="navbar navbar-primary bg-dark">
            <a className="navbar-brand" href="#">{children}</a>
        </nav>
    </header>
}



// create-react-app cep2
// apagar os arquivos desnecessarios
// npm run start
