
function view(hide,blur){
    let blurElements = document.getElementsByClassName(blur);
    let elements = document.getElementsByClassName(hide);

    elements[0].classList.toggle('hidden');
    blurElements[0].classList.toggle('blur');
}