/*
  Solution for "Human readable duration format"
  CodeWars Link: https://www.codewars.com/kata/52742f58faf5485cae000b9a

  Complexity Analysis:
  - Time Complexity: O(n) - Due to Listify() joining strings... Could switch repetitively to get O(1)
  - Space Complexity: O(1) - Constant in all practical scenarios, since there are only 5 elements
*/

//Helper Functions
function stringify(n,txt){
  //add "s" if multiple, add "" if just 1, and return "" if 0
  return(n>0)?n+" "+txt+((n>1)?"s":""):"";
}
function listify(times) {
  // Trim out empty times and filter out falsy values
  const filteredTimes = times.filter(element => element);
  switch (parts.length) {
    case 0:  return "";
    case 1:  return parts[0];
    case 2:  return `${parts[0]} and ${parts[1]}`;
    default: return `${parts.slice(0, -1).join(", ")}, and ${parts.at(-1)}`;
  }
}
function formatDuration (seconds) {
  let t={yrs:0,dys:0,hrs:0,min:0,sec:0};
  //find the number of years
  if (seconds>59) t.min=Math.floor(seconds/60);
  if (t.min>59)   t.hrs=Math.floor(t.min/60);
  if (t.hrs>23)   t.dys=Math.floor(t.hrs/24);
  if (t.dys>364)  t.yrs=Math.floor(t.dys/365);
  //subtract to find accurate amounts
  t.sec = seconds-(t.min*60);
  t.min -= t.hrs*60;
  t.hrs -= t.dys*24;
  t.dys -= t.yrs*365;
  //stringify
  t.sec=stringify(t.sec, "second");
  t.min=stringify(t.min, "minute");
  t.hrs=stringify(t.hrs, "hour");
  t.dys=stringify(t.dys, "day");
  t.yrs=stringify(t.yrs, "year");
  return listify([t.yrs, t.dys, t.hrs, t.min, t.sec]) || "now";
}
