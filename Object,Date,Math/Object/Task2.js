let schedule={};
let isEmpty=(e)=>{
  if(Object.keys(e).length===0)return true;
  else return false
}
console.log(isEmpty(schedule));
schedule['8:30']='get up';
console.log(isEmpty(schedule));