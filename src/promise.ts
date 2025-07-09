interface response{
    responseData:string
}

function promiseImp():Promise<response>{
    return new Promise((resolved)=>{
        setTimeout(()=>{
            resolved({
                responseData:"Hi!!"
            })
        },2000);
    })
}
promiseImp().then((data)=>{
    console.log(data);
    test2();
})
function test2(){
    console.log("Test2");
}
export default promiseImp;