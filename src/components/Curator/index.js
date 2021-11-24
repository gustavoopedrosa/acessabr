import React from 'react'
import './styles.scss'
import curatorPhoto from '../../images/gustavo-pedrosa.jpg'

function CuratorItem() {

    return (
        <div className="curator__container">
            <div className="curator__photo">
                <img src={curatorPhoto} alt="Foto curador Gustavo Pedrosa"/>
            </div>
            <div className="curator__details">
                <div>
                    <h3>Gustavo Pedrosa</h3>
                    <h6>Curadoria</h6>
                </div>
                <p>
                    Tecnólogo em Automação Industrial, com experiência profissional atuando na área de manutenção de equipamentos médicos como técnico em eletrônica. Atualmente migrando para área de tecnologia, com foco em desenvolvimento Front-end.
                </p>
            </div>

        </div>
    )
}

export default CuratorItem