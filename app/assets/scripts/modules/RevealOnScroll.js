import  throttle  from "lodash/throttle"
import debounce from 'lodash/debounce'
class RevealOnScroll {
    constructor(els, thresholdPerson) {
        this.thresholdPerson = thresholdPerson
        this.itemsToReveal = els
        this.browserHeight = window.innerHeight
        this.hideInitially ()
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
        this.enents()
    }

    enents() {
        window.addEventListener("scroll", this.scrollThrottle )
        window.addEventListener("resize", debounce( () => {
            console.log("resize just run")
            this.browserHeight = window.innerHeight
        },333 ))
    }

    calcCaller () {
        console.log("Scroll Function run")
        this.itemsToReveal.forEach(el => {
         if (el.isRevealed == false) {
            this.calculateIfScrolledTo(el)
         }
        }) 
    }

calculateIfScrolledTo(el){
    if (window.scrollY + this.browserHeight > el.offsetTop) {
        console.log("Element was calculated")
 let scrollPercent = (el.getBoundingClientRect().y / this.browserHeight) *100
 if (scrollPercent < this.thresholdPerson) {
  el.classList.add("reveal-item--is-visible")
  el.isRevealed = true
  if (el.isLastItem) {
    window.removeEventListener("scroll",this.scrollThrottle)
  }
 }
    }
}

hideInitially () {
    this.itemsToReveal.forEach(el => { 
      el.classList.add ("reveal-item")
      el.isRevealed = false
})

this.itemsToReveal[this.itemsToReveal.length -1].isLastItem = true

}


}

export default RevealOnScroll;