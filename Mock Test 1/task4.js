function calcultion(a, b, operation) {
    
    if (typeof a === 'number' && typeof b === 'number') {
        if (operation === "sum" || operation === "subtract" || operation === "multiply" || operation === "divide") {
            
            if (operation === "sum") {
                console.log(a + b);
            }
            else if(operation === "subtract"){
                console.log(a - b);
            }
            else if(operation === "multiply"){
                console.log(a * b);
            }
            else if(operation === "divide"){
                if (b !== 0) {
                    console.log(a / b);
                }else{
                    console.log("Cannot divide by zero");
                }
            }
        }else{
            console.log("Make sure that you use: multiply, add, divide or subtract for the operation");
        }
    }else{
        console.log("Please ensure the values are numbers");
    }
}

calcultion(4,0,"divide");