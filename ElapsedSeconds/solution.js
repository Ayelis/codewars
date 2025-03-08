function elapsedSeconds(startDate, endDate){
  //format the date inputs properly
    const start = new Date(startDate);
    const end = new Date(endDate);

  //divide out the milliseconds and round to the nearest second
    return Math.round((end - start) / 1000);
}