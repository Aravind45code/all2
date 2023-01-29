let OrderData={
    "Below 500":60,
    "500-1000":50,
    "1000-1500":60,
    "1500-2000":20,
    "Above 2000":60
};
//calculating no of orders
let ke=Object.values(OrderData)
let sum=0
for(let ele of ke){
    sum+=ele
}
console.log(`the numbers of orders are ${sum}`)

//calculating no of order proportion options
let options=Object.keys(OrderData)
console.log(`the number of order proportion options are ${options.length}`)
//calculating the percentage of each proportion
let l=[]
let percentages=[]
for(let j=0;j<options.length;j++){
    percentages.push(ke[j]/sum);
}
for(let i=0;i<options.length;i++){
    let obj={
        id:i+1,
        order:options[i],
        order_percentage:percentages[i]*100
    }
    l.push(obj)
    
}
console.log(l)


