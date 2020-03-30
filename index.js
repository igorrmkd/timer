class Timer {
    constructor(durationInput, startButton, pauseButtton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButtton = pauseButtton;

        this.durationInput.addEventListener('value', this.duration);
        this.startButton.addEventListener('click', this.start);
        this.pauseButtton.addEventListener('click', this.pause);
    }
    start = () => {
        this.tick();  // call it once, just to start ticking right away
        this.interval = setInterval(this.tick, 1000); // setInterval is builtin JS method
        // clearInterval(timer);
    };
    pause = () => {
        clearInterval(this.interval);
        console.log('Paused!');
    };

    // duration = () => {
    //     console.log('Did you set a starting number?');

    // };
    tick = () => {
        console.log('tick');
        const timeRemaining = this.timeRemaining;
        this.timeRemaining = timeRemaining - 1;
    };

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time;
    }

}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButtton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButtton);


