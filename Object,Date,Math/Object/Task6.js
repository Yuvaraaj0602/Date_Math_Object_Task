user={
    name:'john',
    age:30
}
let count=(obj)=>{
let key=Object.keys(obj);
let value=key.length;
return 'the count is '+value
}
console.log(count(user))