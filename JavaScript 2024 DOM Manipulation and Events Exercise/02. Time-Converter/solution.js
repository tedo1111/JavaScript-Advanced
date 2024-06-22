function attachEventsListeners() {
    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', () => {
        const daysValue = parseFloat(daysInput.value);
        if (!isNaN(daysValue)) {
            hoursInput.value = (daysValue * 24);
            minutesInput.value = (daysValue * 24 * 60);
            secondsInput.value = (daysValue * 24 * 60 * 60);
        }
    });

    hoursBtn.addEventListener('click', () => {
        const hoursValue = parseFloat(hoursInput.value);
        if (!isNaN(hoursValue)) {
            daysInput.value = (hoursValue / 24);
            minutesInput.value = (hoursValue * 60);
            secondsInput.value = (hoursValue * 60 * 60);
        }
    });

    minutesBtn.addEventListener('click', () => {
        const minutesValue = parseFloat(minutesInput.value);
        if (!isNaN(minutesValue)) {
            daysInput.value = (minutesValue / (24 * 60));
            hoursInput.value = (minutesValue / 60);
            secondsInput.value = (minutesValue * 60);
        }
    });

    secondsBtn.addEventListener('click', () => {
        const secondsValue = parseFloat(secondsInput.value);
        if (!isNaN(secondsValue)) {
            daysInput.value = (secondsValue / (24 * 60 * 60));
            hoursInput.value = (secondsValue / (60 * 60));
            minutesInput.value = (secondsValue / 60);
        }
    });
}