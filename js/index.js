import {Router} from './router.js'

const router = new Router()
router.add( "/", "/pages/home.html")
router.add( "/theUniverse", "/pages/universe.html")
router.add( "/exploration", "/pages/exploration.html")
router.add( "/404", "/pages/404.html")

router.handle()


window.onpopstate = ()=> router.handle()
window.route = () => router.route()


//background
const body = document.querySelector('body')
const home = document.querySelector('#home')
const universe = document.querySelector('#universe')
const exploration = document.querySelector('#exploration')

home.addEventListener('click', () => {
  body.classList.add('homeBackground')
  body.classList.remove('universeBackground')
  body.classList.remove('explorationBackground')
})

universe.addEventListener('click', () => {
  body.classList.remove('homeBackground')
  body.classList.add('universeBackground')
  body.classList.remove('explorationBackground')
})

exploration.addEventListener('click', () => {
  body.classList.remove('homeBackground')
  body.classList.remove('universeBackground')
  body.classList.add('explorationBackground')
})
