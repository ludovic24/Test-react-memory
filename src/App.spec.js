import {expect} from 'chai' 
import React from 'react'
import{shallow} from 'enzyme'
import App from './App'
import GuessCount from './GuessCount'


describe('<App />', () => {

    it('renders without crashing', () => {
        const wrapper =shallow(<App />)
    
        expect(wrapper).to.contain(<GuessCount guesses={0}/>)
    })

    it('As 36 cards', () => {
        const wrapper =shallow(<App />)

        expect(wrapper.find('Card')).to.have.length(36)

    })
})


