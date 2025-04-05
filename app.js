const prompt= require ("prompt-sync")();
const deposit=()=>{
    while(true){
        const depositAmount= prompt("Enter your deposit amount: ");
        const numberDepositAmount=parseFloat(depositAmount);
    
        if (isNaN(numberDepositAmount)|| numberDepositAmount<=0){
            console.log("the deposit amount is invalid, please try again" );
        }else{
            return numberDepositAmount;
        }}
    
};


const getNumberOfLines=()=>{
    while(true){
        const lines= prompt("Enter number of lines to bet on (1-3): ");
        const numberOfLines=parseFloat(lines);
    
        if (isNaN(numberOfLines)|| numberOfLines<=0 || numberOfLines >3 ){
            console.log("the number of lines is invalid, please try again" );
        }else{
            return numberOfLines;
        }}
    
};
let balence=deposit();
console.log("your deposit amount is : " +balence);
const NumberOfLines=getNumberOfLines();
console.log(NumberOfLines);