let item=document.querySelectorAll(".display");
let textarea=document.getElementById("textarea");

item.forEach(elm =>{
    elm.addEventListener("click",()=>{
        textarea.value +=elm.innerHTML;
    })
})

let equal=document.getElementById("equal");
equal.addEventListener("click",()=>{
    textarea.value=eval(textarea.value)
})

let clear=document.getElementById("clear").addEventListener("click",()=>{
    textarea.value="";
})