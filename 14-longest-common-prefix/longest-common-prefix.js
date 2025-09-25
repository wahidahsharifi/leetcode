var longestCommonPrefix = function(strs) {
  let count = 0
  for(i = 0; i < Math.min(...strs.map(o => o.length)); i++) {
    const bro = strs.map(e => e[i])
    if(bro.every(h => h == bro[0])) {
      count++
    }else {
      break
    }
  }
  return strs[0].split('').slice(0,count).join('')
};