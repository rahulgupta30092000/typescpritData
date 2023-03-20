var employeeData = [
    { "ID": 101, "FirstName": "Jhon", "LastName": "Lie", "Address": "301,abc,London", "Salary": 10000 },
    { "ID": 102, "FirstName": "David", "LastName": "Jhonson", "Address": "302 ,xyz, USA", "Salary": 20000 },
    { "ID": 103, "FirstName": "Herry", "LastName": "Col", "Address": "303 ,qwe, Canada", "Salary": 30000 },
    { "ID": 104, "FirstName": "Hendry", "LastName": "Lie", "Address": "304 ,ijp, Japan", "Salary": 10000 },
    { "ID": 105, "FirstName": "Kavin", "LastName": "Peter", "Address": "305 ,ppo ,India", "Salary": 50000 },
];
var Details = /** @class */ (function () {
    function Details() {
    }
    Details.prototype.joinName = function () {
        var FullName;
        for (var i = 0; i < employeeData.length; i++) {
            FullName = employeeData[i].FirstName + " " + employeeData[i].LastName;
            console.log("Full Name is " + FullName);
        }
    };
    Details.prototype.splitAddress = function () {
        for (var i = 0; i < employeeData.length; i++) {
            var address = employeeData[i].Address.split(",");
            var flat = address[0];
            var city = address[1];
            var state = address[2];
            console.log("Flat is = ".concat(flat, "  City is = ").concat(city, " State is = ").concat(state));
        }
    };
    Details.prototype.PF = function () {
        var pf = 0;
        var k;
        for (var i = 0; i < employeeData.length; i++) {
            pf = employeeData[i].Salary;
            k = 0.12 * pf;
            console.log("PF is = " + k + " Total Salary is = " + (pf + k));
        }
    };
    return Details;
}());
var detail = new Details();
detail.joinName();
detail.splitAddress();
detail.PF();
