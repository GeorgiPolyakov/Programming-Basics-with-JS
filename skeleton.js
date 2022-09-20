function skeleton(input) {
    let minutes = Number(input[0]);
    let seconds = Number(input[1]);
    let meters = Number(input[2]);
    let seconds100 = Number(input[3]);

    let totalSeconds = (minutes * 60) + seconds;
    let slowing = meters / 120;

    let slowingTime = slowing * 2.5;

    let finalTime = (meters / 100) * seconds100 - slowingTime;

    if (finalTime <= totalSeconds) {
        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${finalTime.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${(finalTime - totalSeconds).toFixed(3)} second slower.`);
    }


}
