class Account{
    min_bal=300
    acc_bal=0
    open_account(){
        console.log( "Account opened succesful")
        
    }
    deposit_amountt(){
        this.acc_bal=this.acc_bal+amount
    }
    withdrawl_amountt(){
        this.acc_bal=this.acc_bal-amount
    }
    get_balt(){
        return this.acc_bal=this.acc_bal
    }
    close_Amount(){}
}
let a1=new Account()
a1.deposit_amountt(5000)
a1.withdrawl_amount(10)

let a2=new Account()
a2.deposit_amountt(12000)
a2.deposit_amountt(3000)
a2.withdrawl_amount(30)

console.log(a1)
console.log(a2)

