
// Function of Dropdown the content in mobile Version
function dropdown() {
    var x = document.querySelector(".navbar-collapse");
    var y = document.querySelector("#crossicon");

    // If the Responsive class not yet then add it oterwise remove
    if (x.className == "navbar-collapse") {

        // Mobile Version When The Click Menu That Convert into X
        x.className += " responsive";
        y.firstChild.innerHTML = "&#10005;";
    } else {

        // else it convert into menu icon
        x.className = "navbar-collapse";
        y.firstChild.innerHTML = "&#9776;";
    }
}



var slideIndex = 0;

function plusSlide(n) {
    showSlide(slideIndex += n);
}


function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let i;
    let sildes = document.querySelectorAll(".banner");
    let dots = document.querySelectorAll(".dot");

    if (n > sildes.length - 1) {
        slideIndex = 0;
    }

    if (n < 0) {
        slideIndex = sildes.length - 1;
    }

    for (i = 0; i < sildes.length; i++) {
        sildes[i].style.display = "none";
    }

    for (i = 0; i < sildes.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }

    sildes[slideIndex].style.display = "block";
    dots[slideIndex].className += ' active';
}


var b = document.querySelector('.bcontainer');

b.addEventListener('click', () => {
    document.addEventListener('keydown', (e) => {

        var name = e.key;
        if (name === 'ArrowRight') {
            plusSlide(1);
        } else if (name == 'ArrowLeft') {
            plusSlide(-1);
        }

    })
})

