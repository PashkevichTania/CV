const stars = document.getElementById("stars")
const moon = document.getElementById("moon")
const mountains_back = document.getElementById("mountains_back")
const mountains_front = document.getElementById("mountains_front")
const btn = document.getElementById("btn")
const text = document.getElementById("text")
const header = document.getElementById("header")
const progressBar = document.getElementById("progress-bar")

const menuBtn = document.getElementById("menu-btn")

window.addEventListener("scroll", function () {
  let value = window.scrollY
  //console.log(value)
  value > 600 ? header.classList.add("header__active") : header.classList.remove("header__active")
  let offset = window.pageYOffset || document.documentElement.scrollTop,
    windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight,
    progress = Math.floor((offset / windowHeight) * 100)

  progressBar.style.width = progress + "%"

  stars.style.left = value * 0.25 + "px"
  moon.style.top = value * 1.05 + "px"
  mountains_back.style.top = value * 0.5 + "px"

  text.style.marginRight = value * 3.5 + "px"
  text.style.marginTop = value * 1.5 + "px"
  btn.style.marginTop = value * 1.5 + "px"

  //header.style.top = value * 0.5 + 'px'
  //mountains_front.style.top = value*0 + 'px';
})

menuBtn.addEventListener("click", function () {
  console.log(header.classList)
  if (header.classList.contains("active")) {
    header.classList.remove("active")
    header.classList.add("hide")
  } else {
    header.classList.remove("hide")
    header.classList.add("active")
  }
})
