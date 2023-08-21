// let x: number; //* Explicitly declares x as a number type
// let y = 1; //* Implicitly declares y as a number type
// let z; //* Declares z without initializing it

// x = 1;

// x = 2;

// y = "one";

// ENUM SECTION

enum ContractStatus {
  Permanent,
  Temp,
  Apprentice,
}

let employeeStatus: ContractStatus = ContractStatus.Temp;

console.log(employeeStatus);
