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
        $('#detail-employee-id').val(salary.employeeId);
        $('#detail-working-days').val(salary.workingDays);
        $('#detail-daily-salary').val(salary.dailySalary);
        $('#detail-allowance').val(salary.allowance);
        $('#detail-discount').val(salary.discount);
        $('#detail-total-salary').val(salary.totalSalary);
    }
});