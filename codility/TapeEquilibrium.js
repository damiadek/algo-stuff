function solution(A) {
    
     if(A.length == 2){
        return Math.abs(A[1] - A[0]) ;
    }
    
    var total = A.reduce((total, value) => {
        return total + value;
    });
    
    var difference = leftSum = 0,min = rightSum = total;
    
    for(var i = 0; i < A.length; i++ ){
        leftSum += A[i];
        rightSum -= A[i];
        
        difference = Math.abs(leftSum - rightSum);
        
        if( difference < Math.abs(min)){
            min = difference;
        }
        
    }
    
    return Math.abs(min);
}
