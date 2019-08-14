function rot13(str) { // LBH QVQ VG!
  let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let arr = alph.split("");
  let decrypt = [];
  let index = 0;

  for(let i = 0; i < str.length; i++){
    index = arr.indexOf(str[i]);
    
    if(index >= 0)
      index += 13;

    if(index < 26 && index >= 0){
      decrypt.push(arr[index]);
    } else if(index >= 26){
      index -= 26;
      decrypt.push(arr[index]);
    } else {
      decrypt.push(str[i]);
    }
  }

  console.log(decrypt.join(''));
  return decrypt.join('');
}

// Change the inputs below to test
rot13("SERR CVMMN!");
