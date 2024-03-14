let salaries = {
    "John": 100,
    "Peter": 300,
    "Mary": 250
};
function topSalary(e) {
    let maxSalary = 0;
    let topPaidPerson = null;

    for (const [name, salary] of Object.entries(e)) {

        if(Object.keys(e).length===0){
            return null
        }
        if (salary > maxSalary) {
            maxSalary = salary;
            topPaidPerson = name;
        }
    }

    return topPaidPerson + maxSalary;
}

console.log(topSalary(salaries));
