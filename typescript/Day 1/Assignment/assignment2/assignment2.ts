var employeeData = [
    { "ID": 101, "FirstName": "Jhon", "LastName": "Lie", "Address": "301,abc,London", "Salary": 10000 },
    { "ID": 102, "FirstName": "David", "LastName": "Jhonson", "Address": "302 ,xyz, USA", "Salary": 20000 },
    { "ID": 103, "FirstName": "Herry", "LastName": "Col", "Address": "303 ,qwe, Canada", "Salary": 30000 },
    { "ID": 104, "FirstName": "Hendry", "LastName": "Lie", "Address": "304 ,ijp, Japan", "Salary": 10000 },
    { "ID": 105, "FirstName": "Kavin", "LastName": "Peter", "Address": "305 ,ppo ,India", "Salary": 50000 },
];


for(var i=0;i<employeeData.length;i++){
    //FullName
  var  FullName=employeeData[i].FirstName+" "+employeeData[i].LastName;
  //Address
  var address=employeeData[i].Address.split(",");
  var flat=address[0];
  var city=address[1];
  var state=address[2];

  //For PF
    var pf:number=employeeData[i].Salary ;
    let  k=0.12*pf;
    //Result
     console.log("Full Name is "+FullName);
     console.log(`Flat is = ${flat}  City is = ${city} State is = ${state}`)
    console.log("PF is = " +k+" Total Salary is = "+(pf+k));
}
