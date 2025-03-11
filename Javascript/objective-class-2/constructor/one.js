class Account{
acc_id;
acc_name;
acc_bal;
acc_bal=500
constructor(id,name,amount){
    this.acc_id=id;
    this.acc_name=name;
    this.acc_bal=amount;


}
deposit_accont(amount){
    this.acc_bal=this.acc_bal+amount;
}
withdrawl(amount){
    this.acc_bal=this.acc_bal-amount;
}
get_bal(){
    return this.acc_bal-this.amin_bal;
}

}
let a1=new Account(101,'rahul',5000);
a1.deposit_amount(1000)
a1.deposit_amount(2000)
let a2=new Account(102,'sonai',15000);
a2.deposit_amount(100)
a2.deposit_amount(200)
console.log(a1)
console.log(a2)
a1.withdrawl(15)
a2.withdrawl(5000)
console.log(a1)
console.log(a2)

console.log(a1.get_bal())
console.log(a2.get_bal())



/*
account{
acc_id:undefined,
acc_name:undefined,
acc_bal:undefined,
mon_bal:500

}
*/
console.log(a2)
