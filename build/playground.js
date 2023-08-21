"use strict";
// let x: number; //* Explicitly declares x as a number type
// let y = 1; //* Implicitly declares y as a number type
// let z; //* Declares z without initializing it
// x = 1;
// x = 2;
// y = "one";
// ENUM SECTION
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 0] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 1] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 2] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeeStatus = ContractStatus.Temp;
console.log(employeeStatus);
