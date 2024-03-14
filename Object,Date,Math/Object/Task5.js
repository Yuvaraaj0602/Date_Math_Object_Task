let salaries = {
    john: 100,
    peter: 300,
    mary: 250
};

let sumSalaries = (e) => {
    let sum = 0; 
    if (Object.values(e).length === 0) {
        return 'result=0';
    } else {
        for (let i of Object.values(e)) {
           
            sum += i;
        }
        return sum; 
    }
};

console.log(sumSalaries(salaries));
