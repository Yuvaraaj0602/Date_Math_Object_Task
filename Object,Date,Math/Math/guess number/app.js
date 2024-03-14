let num1=document.getElementById('num1')
let num2=document.getElementById('num2')
let message =document.getElementById('message')

num1.value=Math.round(Math.random()*100)
num2.value=Math.round(Math.random()*100)
let check=()=>{
   document.getElementById('answer').value=''
   
    num1.value=Math.round(Math.random()*100)
    num2.value=Math.round(Math.random()*100)
}
let submit=()=>{
    let ansvalue=Number(num1.value)+Number(num2.value)
    let ans=Number(document.getElementById('answer').value)
   
    if(ansvalue==ans){
        message.innerHTML='correct answer'
        message.classList='correct'
        check()
    }
    else{
        message.classList='wrong'
        message.innerHTML='wrong answer'
    }
}
document.getElementById('btn').addEventListener('click',submit)
