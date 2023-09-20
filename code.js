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
    Ltemp = a.slice(0, partition1)
    Mtemp = a.slice(partition1, partition1*2)
    Rtemp = a.slice(partition1*2, a.length)
    var LSum = divideAndConquerSum(Ltemp);
    var MSum = divideAndConquerSum(Mtemp);
    var RSum = divideAndConquerSum(Rtemp);
    
    return LSum + MSum + RSum;
}

//console.log(divideAndConquerSum([1, 2, 3, 4, 5, 6, 7, 8, 9,10,11])) //testing purposes