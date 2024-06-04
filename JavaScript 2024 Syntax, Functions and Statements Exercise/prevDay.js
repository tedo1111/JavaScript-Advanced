function prevDay(year, month, day) {
    let currentDate = new Date(year, month - 1, day);

    currentDate.setDate(currentDate.getDate() - 1);

    let prevYear = currentDate.getFullYear();
    let prevMonth = currentDate.getMonth() + 1; 
    let prevDay = currentDate.getDate();

    let formattedPrevDay = `${prevYear}-${prevMonth}-${prevDay}`;


    return formattedPrevDay;
}


console.log(prevDay(2016, 9, 30));
console.log(prevDay(2015, 5, 10)); 
