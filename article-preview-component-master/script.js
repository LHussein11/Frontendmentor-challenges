(function() {
let shareBox = document.querySelector('.shareBox');
let shareIcon = document.querySelector('.shareIcon i');
console.log(shareIcon);

function openShareBox() {
    if(shareBox.classList.contains('hide')){
        shareBox.classList.remove('hide');
    }
    else shareBox.classList.add('hide');
}

shareIcon.addEventListener('click', openShareBox)
})();