
// Complete the chocolateFeast function below.
function chocolateFeast(money, cost, wrappers) {

    var remainingWrappers = 0, total = 0, sweetsBought, sweetsGotten;

    while(money >= cost || remainingWrappers >= wrappers){
        sweetsBought = 0;
        sweetsGotten = 0;
        

        if(money >= cost){


        // buy the sweets with the money
            // divide the money by the cost of a sweet
            sweetsBought = parseInt(money/cost);
            // add the number of sweets to the total
            total += sweetsBought;
            // reduce the money by the cost of the sweets bought
            money -= (sweetsBought * cost);
            // add the sweets bought to the number of wrappers
            remainingWrappers += sweetsBought;

        }

        if(remainingWrappers >= wrappers){

        // turn in the sweet wrappers for an extra sweet
            // divide the wrappers by the required number of wrappers
            sweetsGotten = parseInt(remainingWrappers/wrappers);
            // add the result of the division to the total
            if(sweetsGotten > 0)
                total += sweetsGotten;
            
            // decrement the number of wrappers
            remainingWrappers -= (sweetsGotten * wrappers);

            // add sweetsGotten to remainingWrappers
            remainingWrappers += sweetsGotten;
        }
        
    }

    return total;

}
