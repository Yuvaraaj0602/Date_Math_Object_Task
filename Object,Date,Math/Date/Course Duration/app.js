let find=()=>{
    let date= new Date(document.getElementById('date').value);
    let date1= new Date(date);
    let val = document.getElementById('course').value;
    let days=0
    switch (val) {
        case 'fullstack':
            date1.setDate(date1.getDate()+90)
            days=90
            break;
        case 'web':
            date1.setDate(date1.getDate()+60)
            days=60
            break;
        case 'sap':
            date1.setDate(date1.getDate()+30)
            days=30
            break;
        case 'ims':
            date1.setDate(date1.getDate()+50)
            days=50
            break;
    }
    let out =date1.toDateString()
    document.getElementById('enddate').innerHTML=  `Your course will end on ${out} and your course duration is ${days} days`
    document.getElementById('date').value=''
}
document.getElementById('btnid').addEventListener('click',find)