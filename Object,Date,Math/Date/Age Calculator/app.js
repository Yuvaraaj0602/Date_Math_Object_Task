let age=()=>{

let date= new Date(document.getElementById('date').value);
let curdate = new Date();

let year = curdate.getFullYear()-date.getFullYear()
let month =curdate.getMonth()-date.getMonth()
let day=curdate.getDate()-date.getDate();


if(month<0||(month===0&&date<0)){
    year--;
    month+=12;
}
if(date<0){
    month--
    let newdate=new Date(curdate.getFullYear(),curdate.getMonth());
    newday=newdate.getDate()-date.getDate()+curdate.getDate();
}

document.getElementById('year').innerText=year
document.getElementById('month').innerText=month
document.getElementById('day').innerText=day
}

document.getElementById('agebtn').addEventListener('click',age)