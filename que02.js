//Question 2: Strobogrammatic Number

function isStrobogrammatic(num) {
    const strobogrammaticMap = new Map([
      ['0', '0'],
      ['1', '1'],
      ['6', '9'],
      ['8', '8'],
      ['9', '6'],
    ]);
    
    let left = 0;
    let right = num.length - 1;
    
    while (left <= right) {
      const charLeft = num[left];
      const charRight = num[right];
      
      if (!strobogrammaticMap.has(charLeft) || strobogrammaticMap.get(charLeft) !== charRight) {
        return false;
      }
      
      left++;
      right--;
    }
    
    return true;
  }
  
  // Example usage:
  const num = "69";
  console.log(isStrobogrammatic(num)); // Output: true
  