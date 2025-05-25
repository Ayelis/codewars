/*
  Solution for "Chinese Numeral Encoder"
  CodeWars Link: https://www.codewars.com/kata/52608f5345d4a19bed000b31

  Complexity Analysis:
  - Time Complexity: O(n) - Linear based on the length of the input value (longer decimals take longer omg)
  - Space Complexity: O(1) - Limited number of variables
*/

function toChineseNumeral(num) {
    const digits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    const units = ['', '十', '百', '千', '万'];
    
    let result = num < 0 ? '负' : '';
    num = Math.abs(num);
    
    const integerPart = Math.floor(num);
    const decimalStr = num.toString().split('.')[1] || ''; // Get full decimal as string
    
    // Convert integer part
    if (integerPart === 0) {
        result += '零';
    } else {
        let intStr = integerPart.toString();
        let length = intStr.length;
        
        for (let i = 0; i < length; i++) {
            const digit = parseInt(intStr[i]);
            const place = length - i - 1;
            
            if (place === 1 && digit === 1 && i === 0) {
                result += '十';
            } else if (digit !== 0) {
                result += digits[digit] + units[place];
            } else if (i < length - 1 && intStr[i + 1] !== '0') {
                result += '零';
            }
        }
    }
    
    // Convert decimal
    if (decimalStr) {
        // Trim trailing zeros, but keep at least 1 digit if non-zero
        let trimmedDecimal = decimalStr.replace(/0+$/, '');
        if (trimmedDecimal === '') trimmedDecimal = '0'; // Edge case: "1.000" → "一"
        
        result += '点';
        for (const char of trimmedDecimal) {
            result += digits[parseInt(char)];
        }
    }
    
    return result;
}