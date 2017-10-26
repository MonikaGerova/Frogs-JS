(function(){
    var n = 20;

    var leftFrogs = Array.from({length:n}, i => 1)
    var rightFrogs = Array.from({length:n}, i => 2);

    var frogs = [].concat(leftFrogs,[0],rightFrogs);
    var endState = [].concat(rightFrogs,[0],leftFrogs);
    var states = [];

    dfs(frogs,endState,n,states);

    while(states.length !=0){
        console.log(states.pop());
    }
})();

function dfs(currentState, endState,zeroPosition,states){
   if(currentState.every((el,index)=> el == endState[index] )){
        states.push(currentState);
        return true;
    }

    if(zeroPosition >= 1  && currentState[zeroPosition -1] == 1){
        var newState = swap(currentState,zeroPosition -1, zeroPosition);
        if(dfs(newState,endState,zeroPosition - 1,states)){
            states.push(currentState);
             return true;
        }
    }

    if(zeroPosition >=2 && currentState[zeroPosition -2] == 1){
        var newState = swap(currentState,zeroPosition -2, zeroPosition);

        if(dfs(newState,endState,zeroPosition - 2,states)){
            states.push(currentState);
            return true;
        }
    }

    if(zeroPosition <= currentState.length - 2 && currentState[zeroPosition + 1] == 2){
        var newState = swap(currentState,zeroPosition + 1, zeroPosition);
        if(dfs(newState,endState,zeroPosition + 1,states)){
            states.push(currentState);
            return true;
        }
    }

    if(zeroPosition <= currentState.length -3 && currentState[zeroPosition +2] == 2){
        var newState = swap(currentState,zeroPosition + 2, zeroPosition);
        if(dfs(newState,endState,zeroPosition + 2,states )){
            states.push(currentState);
            return true;
        }
    }    
    
    return false;
}

function swap(array,index1,index2){
    var newArr = array.slice();
    var temp = newArr[index1];
    newArr[index1] = newArr[index2];
    newArr[index2] = temp;

    return newArr;
}