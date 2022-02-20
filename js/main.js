//Add Class to Navbar on Scroll
var navbar = document.querySelector('.navbar');

window.onscroll = () =>{
    this.scrollY > 20 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky') ; 
} 

//Skill Bar Animation
const skills_wrap = document.querySelector('.about-skills'),
      skills_bar = document.querySelectorAll('.progress-line');
      window.addEventListener('scroll', ()=>{
          skillsEffect();
      });

    function checkScroll(el) {
        let rect = el.getBoundingClientRect();

        if(window.innerHeight >= rect.top + el.offsetHeight) return true;
        return false;
    }

    function skillsEffect()
    {
        if(!checkScroll(skills_wrap)) return;
        skills_bar.forEach((skill) => (skill.style.width = skill.dataset.progress));
    }