import React, { useContext } from 'react'
import './styles.scss'
import logoAcessaBr from '../../images/logo-acessaBR.svg'
import logoEbac from '../../images/logo-ebac1.svg'
import { LocationContext } from '../../contexts/LocationContexts'

const Header = () => {
    const { city, state } = useContext(LocationContext)

    return (
        <header className="header__container">
            <div className="header__logo header__logo--state">
                <img src={logoAcessaBr} alt="Logo AcessaBR" />
                <span className="header__city">
                    / { city } - { state }
                </span>
            </div>
            <div className="header__logo">
                <span className="header__span">
                    Apoio:
                </span>
                <img className="header__logo--ebac" src={logoEbac} alt="Logo EBAC"></img>
            </div>
        </header>
    )
}

export default Header