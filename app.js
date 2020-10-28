
function scrolll(){
    let sections = document.querySelectorAll(".intro-text");
window.onscroll = function fadeIn() {
    sections.forEach(section => {
        let sectionSize = section.getBoundingClientRect();
        let bottomPart = sectionSize.bottom;
        if (window.scrollY >= bottomPart) {
            section.style.opacity = "1";
            section.style.transform = "translateX(0)";
            section.style.transition = ".5s ease-in-out";
        } else {
            section.style.opacity = "0";
            section.style.transform = "translateX(-20px)";
            section.style.transition = ".5s ease-in-out";
        }
    });
}
}
scrolll()



   function text (){
const texts= ['Kumar Deepanshu' , 'Web Developer'];
let count = 0 ;//selctor
let index = 0;//indivusual selector
let currentText = '';
let letter = '';
//self invoke function

(function type(){
 if (count == texts.length){
     count = 0;
 }
 currentText=texts[count];
 letter = currentText.slice(0, ++index);
 document.querySelector('.typing').textContent = letter;
 if(letter.length === currentText.length ){
     count++;
     index=0;
 }
 setTimeout(type,700);
}());
}
text();


