$(document).ready(function () {
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    var employeeId = getUrlParameter('id');
    var salaries = JSON.parse(localStorage.getItem('salaries')) || [];
    var salary = salaries.find(s => s.employeeId === employeeId);

    if (salary) {
        $('#id').val(salary.employeeId);
        $('#edit-working-days').val(salary.workingDays);
        $('#edit-daily-salary').val(salary.dailySalary);
        $('#edit-allowance').val(salary.allowance);
        $('#edit-discount').val(salary.discount);
    }

    $('#edit-salary-form').submit(function (e) {
        e.preventDefault();
        var id = parseFloat($('#id').val());
        var workingDays = parseFloat($('#edit-working-days').val());
        var dailySalary = parseFloat($('#edit-daily-salary').val());
        var allowance = parseFloat($('#edit-allowance').val());
        var discount = parseFloat($('#edit-discount').val());
        var totalSalary = workingDays * dailySalary + allowance - discount;

        var salaryIndex = salaries.findIndex(s => s.employeeId === employeeId);

        if (salaryIndex !== -1) {
            salaries[salaryIndex] = {
                employeeId: employeeId,
                workingDays: workingDays,
                dailySalary: dailySalary,
                allowance: allowance,
                discount: discount,
                totalSalary: totalSalary
            };

            localStorage.setItem('salaries', JSON.stringify(salaries));
            alert("Lương đã được sửa!");
            window.location.href = 'salaryTable.html';
        }
    });
});