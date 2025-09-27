var romanToInt = function(roman) {
    const val = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    return roman.split('').reduce((a,c,i,arr) => {
      if(val[c] >= val[arr[i + 1]] || val[arr[i + 1]] === undefined)  {
        a = a + val[c]
      } else {
        a = a - val[c]
      }
      return a
    }, 0)
};