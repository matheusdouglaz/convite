const menuHamburger = document.querySelector('.menu-hamburguer');
menuHamburger.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburger.classList.toggle('change');

    if(menuHamburger.classList.contains('change')){
        nav.style.display = 'block';
    } else{
        nav.style.display = 'none';
    }
}
const text = "Faltam apenas...";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typed-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // Altere o valor do timeout para ajustar a velocidade da digitação
  }
}

typeWriter();

// Função para atualizar o cronômetro
function updateCountdown() {
    var now = new Date().getTime();
    var eventDate = new Date("July 19, 2024 17:30:00 GMT-0300").getTime();
    var distance = eventDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("timer").innerText = "A festa começou!";
    }
}

var countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
   });


   

   