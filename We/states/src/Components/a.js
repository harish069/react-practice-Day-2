var obj = {
    a: "harish",
    b: "sunil"
}

console.log({ ...obj, b: "pavan" })
obj.a = "best";
console.log(obj);