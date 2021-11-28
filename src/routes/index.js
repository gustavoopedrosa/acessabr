import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'
import Ferraz from '../pages/Ferraz'
import { LocationContext } from '../contexts/LocationContexts'
import { Fragment, useState } from 'react'
import Header from '../components/Header'
import { FilterContext } from '../contexts/FilterContext'
import Places from '../components/Places'
import CuratorItem from '../components/Curator'

const Routes = () => {
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [filteredPlace, setFilteredPlace] = useState('')

    return (
        <FilterContext.Provider value={{ filteredPlace, setFilteredPlace }}>
            <LocationContext.Provider value={{ city, setCity, state, setState }}>
                <Header />
                <Switch>
                    <Route
                        path="/:state/:city"
                        element={
                            <Fragment>
                                <Ferraz />
                                <Places />
                                <CuratorItem />
                            </Fragment>
                        }
                    />
                </Switch>
            </LocationContext.Provider>
        </FilterContext.Provider>
    )
}

export default Routes