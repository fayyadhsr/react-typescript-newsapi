const countWords = (input, query) => {
    const wordCount = {};
    for (const word of input) {
      if (wordCount[word]) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    }

    const result = [];

    for (const word of query) {
      result.push(wordCount[word] || 0);
    }
  
    return result;
  }
  
  const INPUT = ['xc', 'dz', 'bbb', 'dz'];
  const QUERY = ['bbb', 'ac', 'dz'];
  
  const output = countWords(INPUT, QUERY);
  