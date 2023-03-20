// Store  employees’ data in one array (ID, FirstName, LastName, Address, Salary). Do the operation searching by indexnumber, EmployeeID, Insert the employee, delete the employee 
//from the Array.
interface Employee {
    ID: number;
    FirstName: string;
    LastName: string;
    Address: string;
    Salary: number;
   
    
    

}
let employeeData: any[] = [
    { "ID": 101, "FirstName": "Jhon", "LastName": "Lie", "Address": "301,abc,London", "Salary": 10000 },
    { "ID": 102, "FirstName": "David", "LastName": "Jhonson", "Address": "302 ,xyz, USA", "Salary": 20000 },
    { "ID": 103, "FirstName": "Herry", "LastName": "Col", "Address": "303 ,qwe, Canada", "Salary": 30000 },
    { "ID": 104, "FirstName": "Hendry", "LastName": "Lie", "Address": "304 ,ijp, Japan", "Salary": 10000 },
    { "ID": 105, "FirstName": "Kavin", "LastName": "Peter", "Address": "305 ,ppo ,India", "Salary": 50000 },
]

class Details implements Employee  {
    
    constructor(){

    }
    ID: number;
    FirstName: string;
    LastName: string;
    Address: string;
    Salary: number;
   
    
    
    
    joinName() {
        var FullName;
        for (var i = 0; i < employeeData.length; i++) {

            FullName = employeeData[i].FirstName + " " + employeeData[i].LastName;
            console.log("Full Name is " + FullName);

        }
        
    }
    splitAddress() {
        for (var i = 0; i < employeeData.length; i++) {
            var address = employeeData[i].Address.split(",");
            var flat = address[0];
            var city = address[1];
            var state = address[2];
            console.log(`Flat is = ${flat}  City is = ${city} State is = ${state}`)
        }

     
   
    }

    PF() {
        var pf:number=0;
        let k;
        for(var i=0;i<employeeData.length;i++){
            pf = employeeData[i].Salary;
            k = 0.12 * pf;
            console.log("PF is = " + k + " Total Salary is = " + (pf+k))
        }
       
        
        
    }




}



const detail = new Details();
detail.joinName();
detail.splitAddress();
detail.PF();



class EmployeeDetails implements Employee{
    constructor(){

    }
    ID: number;
    FirstName: string;
    LastName: string;
    Address: string;
    Salary: number;
    

}

