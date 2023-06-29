//Question 4: Reverse Words in a String III

function reverseWords(s) {
    const words = s.split(' ');
    let result = '';
  
    for (let i = 0; i < words.length; i++) {
      const reversedWord = reverseString(words[i]);
      result += reversedWord;
      if (i !== words.length - 1) {
        result += ' ';
      }
    }
  
    return result;
  }
  
  function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  // Example usage:
  const s = "Let's take LeetCode contest";
  console.log(reverseWords(s)); // Output: "s'teL ekat edoCteeL tsetnoc"
  