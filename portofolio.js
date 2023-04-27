let wrap = document.querySelector(".wrap-porto")
let readmore = document.querySelector(".readmore-porto")

let mouseOver = () => {
  readmore.style.opacity="1"
}

let mouseOut = () => {
    readmore.style.opacity="0"
}
wrap.addEventListener("mouseover",mouseOver)
wrap.addEventListener("mouseout",mouseOut)
