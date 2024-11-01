$(document).ready(function () {
    var employees = JSON.parse(localStorage.getItem('employees')) || [];
    var employeeSelect = $('#employee-select');

    employees.forEach(function (employee) {
        employeeSelect.append(new Option(employee.fullname, employee.id));
    });

    $('#salary-form').submit(function (event) {
        event.preventDefault(); 

        var employeeId = $('#employee-select').val();
        var workingDays = parseFloat($('#working-days').val());
        var dailySalary = parseFloat($('#daily-salary').val());
        var allowance = parseFloat($('#allowance').val());
        var discount = parseFloat($('#discount').val());

        var totalSalary = (dailySalary * workingDays) + allowance + discount;

        $('#total-salary').val(totalSalary);

        var salaryDetails = {
            employeeId: employeeId,
            workingDays: workingDays,
            dailySalary: dailySalary,
            allowance: allowance,
            discount: discount,
            totalSalary: totalSalary
        };

        var salaries = JSON.parse(localStorage.getItem('salaries')) || [];
        salaries.push(salaryDetails);
        localStorage.setItem('salaries', JSON.stringify(salaries));

        alert('Tính lương thành công!');
        window.location.href = 'salaryTable.html';
    });
});