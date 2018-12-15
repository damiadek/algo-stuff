function solution(X, A) {
    var counted = [];
    var counter = 0;
    var time = -1;
    
    if(X == 1 && A[0] == 1){
        return 0;
    }
    
    for(var i = 0; i< A.length; i++){
        if(A[i] <= X){
            if(!counted[A[i]]){
                counted[A[i]] = 1;
                counter++;
            }
            
            if(counter == X){
                time = i;
                break;
            }
        }
        
    }
    
    return time;
    
}
