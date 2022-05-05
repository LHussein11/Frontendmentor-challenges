(function () {
    let main = document.querySelector('.mainContainer');
    let grading = document.querySelector('.grading');
    let gradingNode = document.querySelector('.grading');
    let submit = document.querySelector('button');
    let node = [];
    let grade = 0;

    for(let i = 1; i <= 5; i++) {
         node.push(`<div class="gradingNm"><span>${i}</span></div>`);
    }

    for(let j = 0; j < node.length; j++) {
        gradingNode.innerHTML +=  node[j];
    }

    let nodes =  Array.from(grading.children);
    nodes.forEach(item => {
        item.addEventListener('click', (e) => {
            grade = Number(item.firstChild.innerHTML);
            nodes.forEach(node => {
                if(node.classList.contains('active')){
                    return node.classList.remove('active')
                }
            });
            e.currentTarget.classList.add('active')
        })
    })

    submit.addEventListener('click', () => {
        if(grade == 0) return
        
        let response = `<div class="resultWrapper"><div class="imgPhone">
            <img src="images/illustration-thank-you.svg" alt="phone" />
        </div>
        <div class="result">
            <h3>You selected ${grade} out of 5</h3>
        </div>
        <h2>Thank you!</h2>
        <div class="pContainer">
        <p>We appreciate yoy taking the time to give rating. If you ever need more support, don't hesitate to get in touch!</p>
        </div>
        </div>`
        main.innerHTML = response;
    })
})();

