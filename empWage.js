/*****************************************************
 * @Purpose Employee Wage program
 * @author Rosy Rupali
 * @since 12-07-2021
 *****************************************************/
/**
 * UC1 - To check employee is present or absent
 */
const IS_ABSENT = 0
let empCheck = Math.floor(Math.random() * 10) % 2;
if(empCheck == IS_ABSENT){
    console.log("Employee is Absent. Exiting the program.");
}else{
    console.log("Employee is present");
}