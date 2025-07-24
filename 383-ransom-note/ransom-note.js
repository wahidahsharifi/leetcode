var canConstruct = function(ransomNote, magazine) {
    let magArr = magazine.split('')
    let check = true
    ransomNote.split('').forEach(note => {
      const i = magArr.indexOf(note)
        if(i !== -1) {
            magArr.splice(i, 1)
        } else {
            check = false
        }
    })
    return check === false ? false : true
};