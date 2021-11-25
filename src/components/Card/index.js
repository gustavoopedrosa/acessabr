import React from 'react'
import './styles.scss'
import Button from '../Button'

const Card = () => {
    return (
        <div className="card__container">
            <div className="card__image"></div>
            <div className="card__content">
                <h3>Nome do local</h3>
                <ul className="card__facilities">
                    <li className="card__facilities__item"></li>
                    <li className="card__facilities__item"></li>
                    <li className="card__facilities__item"></li>
                    <li className="card__facilities__item"></li>
                    <li className="card__facilities__item"></li>
                    <li className="card__facilities__item"></li>
                    <li className="card__facilities__item"></li>
                    <li className="card__facilities__item"></li>
                    <li className="card__facilities__item"></li>
                    <li className="card__facilities__item"></li>
                </ul>
                <p>Lorem ipsum dolor sit amet conasdbashda duasdasjdb</p>
                <Button>Como chegar</Button>
            </div>

        </div>
    )
}

export default Card