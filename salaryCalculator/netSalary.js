

function calculateNetSalary(basicSalary, benefits)
 {
    // let the constants for tax rates and deductions be//
    const taxRate = 0.25; 
    const nhifRate = 0.015; 
    const nssfRate = 0.06; 
  
    // Calculate gross salary//
    const grossSalary = basicSalary + benefits;
  
    // Calculate PAYE (tax)//
    const PAYE = grossSalary * taxRate;
  
    // Calculate NHif deductions//
    const nhifDeductions = grossSalary * nhifRate;
  
    // Calculate NSSF deductions//
    const nssfDeductions = grossSalary * nssfRate;
   
    // Calculate net salary//
    const netSalary = grossSalary - PAYE - nhifDeductions - nssfDeductions;
  
    // Display the result//
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`PAYE (Tax): ${PAYE}`);
    console.log(`NHIF Deductions: ${nhifDeductions}`);
    console.log(`NSSF Deductions: ${nssfDeductions}`);
    console.log(`Net Salary: ${netSalary}`);
  }
  
  