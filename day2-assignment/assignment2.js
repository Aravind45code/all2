var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(designation, salary, office_time) {
        this.designation = designation;
        this.salary = salary;
        this.office_time = office_time;
    }
    User.prototype.printEmployee = function () {
        console.log("The employee details are");
        console.log("Employee name ".concat(this.designation));
        console.log("Employee salary ".concat(this.salary));
        console.log("Employee office_time".concat(this.office_time));
    };
    return User;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(designation, salary, office_time) {
        return _super.call(this, designation, salary, office_time) || this;
    }
    return Employee;
}(User));
var employee = new Employee("sde-1", 10000, '8hr');
employee.printEmployee();
