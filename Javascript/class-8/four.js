function cal_age(birth_year){
    let curret_year=new Date().getFullYear()
    return curret_year-birth_year;

}
let r_age= cal_age(1973)
let s_age=cal_age(1953)
let p_age=cal_age(1983)
console.log(r_age)
console.log(s_age)
console.log(p_age)



