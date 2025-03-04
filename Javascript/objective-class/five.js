class Account{
    min_Bal=400;
    branch_name="ongole"
    acc_bal=20;
    open_Account(){
        console.log("Account opened")
        
    }
    deposit_Amount(){
        console.log("Amont Deposited")
        
    }
    get_bal(){
        console.log("Balance low")
        
    }
    withdrawl(){
        console.log('Insuffient balance')
        
    }
    close_Account(){
        console.log("You cont class -bal is :-ve")
        
    }
}
let a1=new Account();
a1.open_Account()
a1.deposit_Amount()
a1.withdrawl()
a1.get_bal()
a1.close_Account()