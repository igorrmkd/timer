const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButtton = document.querySelector('#pause');

const circle = document.querySelector('circle');
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);
let currentOffset = 0;

const timer = new Timer(durationInput, startButton, pauseButtton, {
    onStart() {
        console.log("Timer started");

    },
    onTick() {
        // console.log("Timer ticked down!");
        circle.setAttribute('stroke-dashoffset', currentOffset);
        currentOffset = currentOffset - 1;
    },
    onComplete() {
        console.log("Timer is Completed");
    },
});


