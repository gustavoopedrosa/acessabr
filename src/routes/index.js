import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom"
import Ferraz from '../pages/Ferraz'
import { LocationContext } from '../contexts/LocationContexts'
import { useState } from "react"
import Header from "../components/Header"

const Routes = props => {
    const [city, setCity] = useState('')
    const [state, setState] = useState('')

    return (
        <LocationContext.Provider value={{ city, setCity, state, setState}}>
            <Header />
            <Switch>
                <Route path="/:state/:city" element={<Ferraz />} />
            </Switch>
        </LocationContext.Provider>
    )
}

export default Routes