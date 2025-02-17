function  calculateSleepTime( times ) {
    let totalTimeSec = 0;
    for (let i = 0; i < times.length; i++) {
        totalTimeSec += times[i];            
        }
        // return totalTimeSec;

        totalHour = totalTimeSec / 60
        return totalHour
        totalMin = totalHour / 60;

    }
    


let x = calculateSleepTime([1000, 2000, 725]);
console.log(x)
