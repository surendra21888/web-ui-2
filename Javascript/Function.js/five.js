let emp={
    eid:101,
    ename:"rahul",
    esal:45000.45
}
Object.freeze(emp)
emp.ename="rahul gandhi"
console.log(emp)
