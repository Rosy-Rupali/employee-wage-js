/*****************************************************
 * @Purpose Employee Wage program
 * @author Rosy Rupali
 * @since 12-07-2021
 *****************************************************/
/**
 * UC1 - IF ELSE CONDITION
 * To check employee is present or absent
 */
{
  const IS_ABSENT = 0;
  let empCheck = Math.floor(Math.random() * 10) % 2;
  if (empCheck == IS_ABSENT) {
    console.log("Employee is Absent.");
    return;
  } else {
    console.log("Employee is present");
  }
}

//UC2 SWITCH CASE

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;

/**
 * calculating monthly wage of employee using function
 * @param {*} empCheck
 * @returns employee working hours
 */
function getWorkingHours(empCheck) {
  switch (empCheck) {
    case IS_PART_TIME:
      return PART_TIME_HOURS;
    case IS_FULL_TIME:
      return FULL_TIME_HOURS;
    default:
      return 0;
  }
}
let totalEmpHrs = 0;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
  let empCheck = Math.floor(Math.random() * 10) % 3;
  totalEmpHrs += getWorkingHours(empCheck);
}
let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Hours :" + totalEmpHrs + " Employee wage is :" + empWage);
