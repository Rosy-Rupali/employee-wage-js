/*****************************************************
 * @Purpose Employee Wage program
 * @author Rosy Rupali
 * @since 12-07-2021
 *****************************************************/

 const IS_PART_TIME = 1;
 const IS_FULL_TIME = 2;
 const PART_TIME_HOURS = 4;
 const FULL_TIME_HOURS = 8;
 const WAGE_PER_HOUR = 20;
 const NUM_OF_WORKING_DAYS = 20;
 const MAX_HRS_IN_MONTH = 160;
 let totalEmpHrs = 0;
 let totalWorkingDays = 0;
 let empDailyHrsAndWageArr =  new Array();
 
 
 /**
  * This function is use to check working hours of the employee
  * who is present and for absent it is zero
  * @param {*} empCheck : checking employee is present or absent
  * @returns working hours of an employee
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
 /**
  * calculating the daily wage and returns it
  * @param {*} empHrs : daily working hrs
  * @returns  daily wage of an employee
  */
 function calculateDailyWage(empHrs){
     return empHrs*WAGE_PER_HOUR;
 }
 
 while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
   totalWorkingDays++;
   let empCheck = Math.floor(Math.random() * 10) % 3;
   let empHrs = getWorkingHours(empCheck);
   totalEmpHrs += empHrs;
   //pushing the daily wage to an array
   empDailyHrsAndWageArr.push(
     {
                 dayNum: totalWorkingDays,
                 dailyHours: empHrs,
                 dailyWage: calculateDailyWage(empHrs),
                 toString() {
                                 return ("\nDay " +this.dayNum +"=> Working Hours is " +this.dailyHours +
                                         " And Wage Earned = " +this.dailyWage );
     },
   });
   
 }
 //UC10 - Emp wage and daily hous using array object
 console.log(" UC10- Showing Daily Hours worked and Wage Earned: "+empDailyHrsAndWageArr);
 
 // UC 11A - ccalculated total wage and total worked hours
 let totalWages = empDailyHrsAndWageArr
 .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
 .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
 
 let totalEmpHours = empDailyHrsAndWageArr
 .filter(hrs => hrs > 0)
 .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);
 
 console.log("Total Hours: "+totalEmpHours+ " Total Wages: "+totalWages);
 
 // UC 11B - displaying the full workings days using foreach
 process.stdout.write("Logging Full Work Days");
 empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
   .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));
 
 // displaying Part working days using Map by reducing toString Array  
 let partWorkingDayStrArr = empDailyHrsAndWageArr
         .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
         .map(dailyHrsAndWage => dailyHrsAndWage.toString());
 console.log("\nPart WorkingDay Strings: "+ partWorkingDayStrArr);
 
 //No working days only using Map function
 let nonWorkingDayNums = empDailyHrsAndWageArr
     .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
     .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
 console.log("NonWorkingDayNums: "+nonWorkingDayNums);
 