function divideAndConquerSum(a) {
    var Ltemp = []
    var Mtemp = []
    var Rtemp = []
    if (a.length <= 0){
        return 0;
    }
    else if (a.length == 1){
        return a[0];
    }
    else if (a.length == 2){
        return a[0] + a[1];
    }
    var partition1 = Math.floor(a.length/3)
    for(var k = 0; k < partition1; k++){
        Ltemp[k] = a[k]
    }
    for(var k = partition1; k < partition1*2; k++){
        Mtemp[k-partition1] = a[k]
    }
    for(var k = partition1*2; k < a.length; k++){
        Rtemp[k-partition1*2] = a[k]
    }
    var LSum = divideAndConquerSum(Ltemp);
    var MSum = divideAndConquerSum(Mtemp);
    var RSum = divideAndConquerSum(Rtemp);
    
    return LSum + MSum + RSum;
}

//console.log(divideAndConquerSum([1, 2, 3, 4, 5, 6, 7, 8, 9])) //testing purposes