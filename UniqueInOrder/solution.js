var uniqueInOrder=function(iterable){
  // Iterate through array or string
  const result = [...iterable].reduce((acc, char) => {
    // Push the current unique character to the result accumuulator
    if (acc.at(-1) !== char) acc.push(char);
    //return the accumulation
    return acc;
  }, []);
  //return the result
  return (result);
}
