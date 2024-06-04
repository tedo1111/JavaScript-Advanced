function timeToWalk(steps, footprintLength, speed) {
    // Calculate the distance in meters
    let distanceMeters = steps * footprintLength;

    // Convert speed from km/h to m/min
    let speedMetersPerMin = (speed * 1000) / 60;

    // Calculate total time in minutes
    let totalTimeMinutes = distanceMeters / speedMetersPerMin;

    // Calculate total break time
    let totalBreaks = Math.floor(distanceMeters / 500);
    let totalBreakTimeMinutes = totalBreaks;

    // Add break time to total time
    totalTimeMinutes += totalBreakTimeMinutes;

    // Convert total time to hours, minutes, and seconds
    let hours = Math.floor(totalTimeMinutes / 60);
    let minutes = Math.floor(totalTimeMinutes % 60);
    let seconds = Math.round((totalTimeMinutes % 1) * 60);

    // Format the result
    let result = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // Output the result
    console.log(result);
}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);