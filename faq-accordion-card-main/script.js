(function () {
const info = [
    {
        question: 'How many team members can I invite?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio expedita iste aliquam atque ad? In hic incidunt optio distinctio facere.'
    },
    {
        question: 'What is the maximum file upload size?',
        answer: 'No more than 2GB. All files in your account must fit your allotted storage space.'
    },
    {
        question: 'How do I reset my password?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio expedita iste aliquam atque ad? In hic incidunt optio distinctio facere.'
    },
    {
        question: 'Can I cancel my subscription?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio expedita iste aliquam atque ad? In hic incidunt optio distinctio facere.'
    },
    {
        question: 'Do you provide additional support?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio expedita iste aliquam atque ad? In hic incidunt optio distinctio facere.'
    }
];

let container = document.querySelector('.container');
let infoWrapper = document.querySelector('.infoWrapper');

 info.forEach(item => {
     let element = `<div class="questionAnswer">
     <div class="questionContainer">
       <p class="question">${item.question}</p>
       <img class="arrow" src="images/icon-arrow-down.svg" alt="arrow">
     </div>
     <p class="answer hide">${item.answer}</p>
     <hr>
   </div>`;

   infoWrapper.innerHTML += element;
 })

 let arrow = document.querySelectorAll('.arrow');
 let arrowArr = Array.from(arrow);
 arrowArr.forEach(item => {
    item.previousElementSibling.style.color = 'hsl(240, 6%, 50%)'
     item.addEventListener('click', openAnswer);
     
     let answer = item.parentElement.nextElementSibling;
     function openAnswer() {
        arrowArr.forEach(node => {
            if(node.parentElement.nextElementSibling.classList.contains('show') || !node.parentElement.nextElementSibling.classList.contains('show')) {
                node.parentElement.nextElementSibling.classList.remove('show');
                node.previousElementSibling.style.fontWeight = 'normal';
                node.previousElementSibling.style.color = 'hsl(240, 6%, 50%)'
                console.log(node.parentElement.nextElementSibling);
                node.style.transform = 'rotate(360deg)';
            }
         });
         answer.classList.add('show');
         item.previousElementSibling.style.fontWeight = 'bold';
         item.previousElementSibling.style.color = '#000'
         item.style.transform = 'rotate(180deg)'
     }
 })

 // MEDIA QUERIES 

 function handleMedia(size) {
     if(size.matches) {
        console.log(container.children[0].children[2].src);
        container.children[0].children[0].src = 'images/illustration-woman-online-mobile.svg';
        container.children[0].children[2].src = 'images/bg-pattern-mobile.svg';
     } else {
        container.children[0].children[0].src = 'images/illustration-woman-online-desktop.svg';
        container.children[0].children[2].src = 'images/bg-pattern-desktop.svg';
     }
 }

let query = window.matchMedia("(max-width: 375px)");
handleMedia(query);
query.addEventListener('change' ,handleMedia);

})();