function solution(N, A) {

    var array = [], index = max = lastMax = 0;
    
    for(var i = 0; i < N; i++){
        array[i] = 0;
    }
    
    for(var i = 0; i < A.length; i++){
        
        index = (A[i] - 1);
        if(A[i] <= N){
          if(array[index] < lastMax) array[index] = lastMax;
          array[index] += 1;
          max = array[index] > max ? array[index] : max;
        }else if(A[i] == N+1){
            lastMax = max;
        }
        
    }
    
    for(var i = 0; i < N; i++){
      if(array[i] < lastMax) array[i] = lastMax;
    }
    
    return array;
    
    
}
