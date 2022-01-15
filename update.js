function abhi(a,b){
    console.log(this)
}
let myobj ={
    a:this,
    name:"Abhishek",
    role:"good programmer",
    // obj:newobj={
    //     a:this,
    //     name:"niranjan",
    //     role:"software-engineer",
    //     fun:function ab(){
    //         console.log("this function is under newobj")
    //         console.log(this)
    // },
    // },
    fun:function ab(){
                console.log("this function is under obj")
                console.log(this)
    },
    fun2:(ab)=>{
        console.log("this is an arrow function" + this)
        console.log(this)
    }
}


abhi()
myobj.fun()
myobj.fun2()