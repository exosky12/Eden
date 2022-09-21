const sliderSneakersHomepage = Array.from(document.querySelectorAll(".sneakers-homepage"));
const nbSlideSneakersHomePage = sliderSneakersHomepage.length;
const sliderTrackerHomepage = Array.from(document.querySelectorAll(".tracker-homepage"));
const nbTrackerHomePage = sliderTrackerHomepage.length;
const suivantSneakersHomePage = document.querySelector('.next')
const precedentSneakersHomePage = document.querySelector('.back')
let count = 0;
let count2 = 0;

function slideSuivante(){
    sliderSneakersHomepage[count].classList.remove('active-sneakers-homepage');
    sliderTrackerHomepage[count2].classList.remove('active-tracker-homepage');

    if(count < nbSlideSneakersHomePage - 1){
        count++;
    }
    else{
        count = 0;
    }

    if(count2 < nbTrackerHomePage - 1){
        count2++;
    }
    else{
        count2 = 0;
    }
    sliderSneakersHomepage[count].classList.add('active-sneakers-homepage');
    sliderTrackerHomepage[count2].classList.add('active-tracker-homepage');
}
suivantSneakersHomePage.addEventListener('click', slideSuivante);


function slidePrecedente(){
    sliderSneakersHomepage[count].classList.remove('active-sneakers-homepage');
    sliderTrackerHomepage[count2].classList.remove('active-tracker-homepage');

    if(count > 0){
        count--;
    }
    else{
        count = nbSlideSneakersHomePage - 1;
    }
    if(count2 > 0){
        count2--;
    }
    else{
        count2 = nbTrackerHomePage - 1;
    }

    sliderSneakersHomepage[count].classList.add('active-sneakers-homepage');
    sliderTrackerHomepage[count2].classList.add('active-tracker-homepage');
}
precedentSneakersHomePage.addEventListener('click', slidePrecedente);


function keyPress(e){
    if(e.keyCode === 37){
        slidePrecedente();
    }
    else if(e.keyCode === 39){
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress);


