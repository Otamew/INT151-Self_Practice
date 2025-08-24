function getFreqOfWords(sentence) {
if (sentence === null || sentence === undefined) return undefined;
if (!typeof sentence === 'string') return 'Not string'
if (typeof sentence === 'string'){
    let words = sentence.toLowerCase().split(" ");
    let freq = {}
      for (let word of words) {
    if (freq[word]) {
      freq[word] += 1
    } else {
      freq[word] = 1
    }
  }
  return freq
}
 
 
}
 
console.log(getFreqOfWords("How are you today are you good"))
console.log(getFreqOfWords(null))
console.log(getFreqOfWords(undefined))