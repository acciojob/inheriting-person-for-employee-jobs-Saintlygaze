// complete this js code
class person{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
}

person.prototype.greet=function()
{
	console.log("hi my name is"+`${this.name}`+,i am `${this.age}`+years old);
}

class Employee extends person{
	constructor(name,age,jobTitle){
		super(name,age);
		this.jobTitle = jobTitle;
	}
}


person.prototype.jobGreet=function()
{
	console.log("hi my name is"+`${this.name}`+,"i am "`${this.age}`+"years old",
			   "and my job title is"+`${this.jobTitle}`);
}
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
