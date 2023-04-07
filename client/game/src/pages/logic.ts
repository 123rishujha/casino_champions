



function handlebuttonval():number[]{
    var arr = [];
    while (arr.length < 5) {
      var r = Math.floor(Math.random() * 9) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    let array= [...arr,10,11,12,13]
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
     return array
  }
  
export default handlebuttonval

