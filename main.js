import './style.css'

import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Tokenomics } from './components/Tokenomics'
import { Footer } from './components/Footer'

document.querySelector('#app').innerHTML = `
  ${Hero()}
  ${Features()}
  ${Tokenomics()}
  ${Footer()}
`
