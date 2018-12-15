function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var i;
    var positives = [];
    var missing = 1;
    
    for (i = 0; i < A.length; i++){
        if(A[i] > 0){
            positives[A[i]] = true;
        }
    }
    
    for (i = 1; i <= positives.length; i++){
        if(!positives[i]){
            missing = i;
            break;
        }
    }
    
    return missing;
    
}
