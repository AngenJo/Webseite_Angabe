const indikatoren =  document.getElementsByClassName("indikator");
indikatoren[0].classList.add("aktiv");
 

const slides = document.getElementsByClassName("slide");
slides[0].classList.add("aktiv");

const textareaRefs = document.getElementsByClassName("textbereich_ref");
textareaRefs[0].classList.add("textbereich_ref_active");

var currentIndex= 0;

function switchSlide(index){
    indikatoren[currentIndex].classList.remove("aktiv");
    slides[currentIndex].classList.remove("aktiv");
    textareaRefs[currentIndex].classList.remove("textbereich_ref_active");

    var newIndex = currentIndex + index;

    if(newIndex < 0){
        newIndex = slides.length -1 ;
    }
    if(newIndex > slides.length -1){
        newIndex = 0;
    }
    indikatoren[newIndex].classList.add("aktiv");
    slides[newIndex].classList.add("aktiv");
    textareaRefs[newIndex].classList.add("textbereich_ref_active");

    currentIndex =  newIndex;
}

function jumpSlide(index){
    console.log(index)
    indikatoren[currentIndex].classList.remove("aktiv");
    slides[currentIndex].classList.remove("aktiv");
    textareaRefs[currentIndex].classList.remove("textbereich_ref_active");
    
    indikatoren[index].classList.add("aktiv");
    slides[index].classList.add("aktiv");
    textareaRefs[index].classList.add("textbereich_ref_active");

    currentIndex =  index;
}

