const flashcards = document.querySelectorAll('.flashcard');

flashcards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});


function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();

    var session = document.getElementById('session');

    if(hrs >=12) {
        session.innerHTML = 'PM';
    } else {
        session.innerHTML = 'AM';
    }

    if (hrs > 12) {
        hrs = hrs - 12; 
    }

    var minText = (min < 10) ? '0' + min : min; 
    var secText = (sec < 10) ? '0' + sec : sec; 
    document.getElementById('hours').innerHTML = hrs; 
    document.getElementById('minutes').innerHTML = minText; 
    document.getElementById('seconds').innerHTML = secText; 
}

setInterval(displayTime, 10);