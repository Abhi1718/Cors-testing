
let name = "rushikesh"
let my_obj={
    name:"Abhishek",
    role:"Programmer",
    id:123,
    fun:function ab(){
    console.log(this)
     return this
    },
    arr:(abhishek =>{
        return this
    })
}
console.log("this  is a normal function ")
abhi= my_obj.fun()
console.log(abhi)
console.log("this  is a arrow function ")
abhi2 = my_obj.arr()
console.log(abhi2)