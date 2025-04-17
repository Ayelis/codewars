/*
  Solution for "The Hashtag Generator"
  CodeWars Link: https://www.codewars.com/kata/52449b062fb80683ec000024

  Complexity Analysis:
  - Time Complexity: O(n) - A linear amount of time to run linear processes on a string
  - Space Complexity: O(1) - Just the input string
*/

function generateHashtag(str) {
  //Empty string check
  if(str.trim().length==0) return false;

  //ProperCase
  str = str.replace(/\b\w/g, function(char) {
    return char.toUpperCase();
  });

  //Remove whitespace characters
  str = "#"+str.replace(/\s/g, "");

  //Twitter check
  if(str.length>140) return false;

  return str;
}