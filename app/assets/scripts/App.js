import '../styles/styles.css'
import mobileMenu from './modules/mobileMenu'
import RevealOnScroll from './modules/RevealOnScroll';

 new RevealOnScroll (document.querySelectorAll(".feature-item"), 75)
 new RevealOnScroll (document.querySelectorAll(".testimonial"), 60)


let mobileMenus = new mobileMenu ();
if (module.hot) {
    module.hot.accept()
}