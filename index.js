const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButtton = document.querySelector('#pause');

const circle = document.querySelector('circle');
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);
let duration;

const timer = new Timer(durationInput, startButton, pauseButtton, {
    onStart(totalDuration) {
        duration = totalDuration;
        console.log("Timer started");
    },

    onTick(timeRemaining) {
        // console.log("Timer ticked down!");
        circle.setAttribute('stroke-dashoffset',
            perimeter * timeRemaining / duration - perimeter
        );
    },

    onComplete() {
        console.log("Timer is Completed");
    },
});


