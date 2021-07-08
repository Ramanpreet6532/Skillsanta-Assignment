var Employee =
{
    company: 'Rohit'
}
var Emp1 = Object.create(employee);
delete Emp1.company
Console.log(emp1.company);

// ReferenceError: employee not defined 
// Console not defined, it should be console.log()
// emp1 not defined, it should be Emp1


// code after correction
var Employee =
{
    company: 'Rohit'
}
var Emp1 = Object.create(Employee);
delete Emp1.company
console.log(Emp1.company);

//output = "Rohit"