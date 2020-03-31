class Timer {
    constructor(durationInput, startButton, pauseButtton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButtton = pauseButtton;
        if (callbacks) { // add this check, to make the callbacks optional
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButtton.addEventListener('click', this.pause);
    }

    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }

        this.tick();  // call it once, just to start ticking right away
        this.interval = setInterval(this.tick, 50);// tick every 50ms
    };

    pause = () => {
        clearInterval(this.interval);
        console.log('Paused!');
    };

    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining - .05; // sutract 50ms
            if (this.onTick) { // detect the ticks
                this.onTick(this.timeRemaining);
            }
        }
    };

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);//round the timer tick time to just 2 decimals
    }

};