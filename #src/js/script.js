function testWebP(callback) {

    let webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});



// == NAVIGATION ==
let list = document.querySelector('.navigation__items');
let links = document.querySelectorAll('.navigation__item');

window.onload = () => {
    links[1].classList.add('active');
}

list.addEventListener('click', openMenu);
function openMenu(params) {
    list.classList.toggle('open');
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        link.addEventListener('click', changeItem);
        function changeItem(event) {
            links.forEach(element => {
                element.classList.remove('active');
                this.classList.add('active');
            });
        }
        event.preventDefault();
    }
}
// == / NAVIGATION ==