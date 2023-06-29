//Question 6: Rotate String

function rotateString(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
    
    const combined = s + s;
    
    if (combined.includes(goal)) {
      return true;
    }
    
    return false;
  }
  
  // Example usage:
  const s = "abcde";
  const goal = "cdeab";
  console.log(rotateString(s, goal)); // Output: true
  