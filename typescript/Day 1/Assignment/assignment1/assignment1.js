var employeeData = [
    { "ID": 101, "FirstName": "Jhon", "LastName": "Lie", "Address": "London", "Salary": 10000 },
    { "ID": 102, "FirstName": "David", "LastName": "Jhonson", "Address": "USA", "Salary": 20000 },
    { "ID": 103, "FirstName": "Herry", "LastName": "Col", "Address": "Canada", "Salary": 30000 },
    { "ID": 104, "FirstName": "Hendry", "LastName": "Lie", "Address": "Japan", "Salary": 10000 },
    { "ID": 105, "FirstName": "Kavin", "LastName": "Peter", "Address": "India", "Salary": 50000 },
];
function searchById(k) {
    for (var i = 0; i < employeeData.length; i++) {
        if (employeeData[i].ID == k) {
            console.log(employeeData[i]);
            break;
        }
    }
}
searchById(105);
function searchByIndex(p) {
    if (employeeData[p]) {
        console.log(employeeData[p]);
    }
}
searchByIndex(2);
function insertData(k) {
    employeeData.push(k);
    console.log(employeeData);
}
insertData({ "ID": 106, "FirstName": "Mihir", "LastName": "Peter", "Address": "India", "Salary": 20000 });
function deleteData(m) {
    employeeData.splice(m, 1);
    console.log(employeeData);
}
deleteData(2);
