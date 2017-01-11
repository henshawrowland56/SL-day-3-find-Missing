module.exports = {
  findMissing : function (arr1,arr2) {

    function sortArray(an) {
      an.sort(function(a, b){return a-b});
       return an;
    }
    //sort the arrays
    var sArr1 = sortArray(arr1);
    var sArr2 = sortArray(arr2);
    //compare indexes using the length of 2nd array
    var x = sArr2.length-1 ;
    var result = 0;
    if(sArr2.length > sArr1.length){
      if(sArr2[0]!=sArr1[0]){
        result = sArr2[0];
      }
      else{
        result = sArr2[x];
      }
    }
    return result;
  }
}