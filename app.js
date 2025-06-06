const prompt= require ("prompt-sync")();

const ROWS= 3;
const COLS=3;

const SYMBOLS_COUNT ={
    "A":2,
    "B":4,
    "C":6,
    "D":8,

}
 
const SYMBOL_VALUES={
    "A":5,
    "B":4,
    "C":3,
    "D":2,
}


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
const getBet=(balence,lines)=>{
    while(true){
        const bet= prompt("Enter Your bet per line : ");
        const numberBet=parseFloat(bet);
    
        if (isNaN(numberBet)|| numberBet<=0 || numberBet >balence /lines ){
            console.log("the number of bet is invalid, please try again" );
        }else{
            return numberBet;
        }}
}

const spin=()=>{
    const symbols=[];
    for(const [symbol,count] of Object.entries(SYMBOLS_COUNT)){
        console.log(symbol,count)
      for (let i=0 ;i<count ; i++){
        symbols.push(symbol);
    }
    }
const reels=[];
for (let i=0; i <COLS ;i++){
    reels.push([]);
    const reelSymbols =[...symbols]
    for (let j=0 ; j< ROWS; j++){
const randomIndex=Math.floor(Math.random ()* reelSymbols.length)
const selectedSymbol=reelSymbols[randomIndex];
reels[i].push(selectedSymbol);
reelSymbols.splice(randomIndex,1)
    }
}
    return reels;
}
 
const transpose =(reels)=>{
    const rows=[]
    for(let i=0 ;i <ROWS ;i++){
        rows.push([]);
        for (let j=0 ;j<COLS ; j++){
            rows[i].push(reels[j][i])
        }
    }
    return rows
}
const printRows=(rows)=>{
    for (const row of rows){
        let rowString="";
        for(const [i , symbol] of row.entries()){
            rowString+=symbol;
            if(i!= row.length-1){
                rowString+=" | "
            }
        }
         console.log(rowString)
    }
}
const getWinnings =(rows,bet,lines)=>{
    let winnings=0;
    for (let row=0; row <lines ;row ++){
        const symbols=rows[row];
        let allSame=true;

        for(const symbol of symbols){
            if(symbol !=symbols[0]){
                allSame=false;
                break;
            }
        }
        if (allSame){
          winnings+=  bet* SYMBOL_VALUES[symbols[0]]
        }
 
    }
return winnings;
}
let balence=deposit();

const NumberOfLines=getNumberOfLines();

const bet=getBet(balence,NumberOfLines);
const reels=spin();
console.log(reels)
const rows=transpose(reels);
console.log(rows)
printRows(rows);
const winnings=getWinnings(rows,bet,NumberOfLines)
console.log("You won ,$"+winnings.toString())