function forLoop (array) {
  for (let i = 0; i < array.length; ++i) {
    array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
  }
}
