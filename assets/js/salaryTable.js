$(document).ready(function () {
    function loadSalaries() {
        var salaries = JSON.parse(localStorage.getItem('salaries')) || [];
        var salaryTableBody = $('#salary-table-body');
        salaryTableBody.empty();

        salaries.forEach(function (salary) {
            var row = $('<tr></tr>');
            row.append('<td>' + salary.employeeId + '</td>');
            row.append('<td>' + salary.workingDays + '</td>');
            row.append('<td>' + salary.dailySalary + '</td>');
            row.append('<td>' + salary.allowance + '</td>');
            row.append('<td>' + salary.discount + '</td>');
            row.append('<td>' + salary.totalSalary + '</td>');
            row.append('<td><a href="salaryDetail.html?id=' + salary.employeeId + '" class="btn btn-info">Xem</a> <a href="salaryEdit.html?id=' + salary.employeeId + '" class="btn btn-warning">Sửa</a> <button class="btn btn-danger btn-delete" data-id="' + salary.employeeId + '">Xóa</button></td>');
            salaryTableBody.append(row);
        });
    }

    function saveSalaries(salaries) {
        localStorage.setItem('salaries', JSON.stringify(salaries));
        loadSalaries();
    }

    loadSalaries();

    $('#salary-table-body').on('click', '.btn-delete', function () {
        if (confirm('Bạn có chắc chắn muốn xóa?')) {
            var employeeId = $(this).data('id');
            var salaries = JSON.parse(localStorage.getItem('salaries')) || [];
            var updatedSalaries = salaries.filter(s => s.employeeId !== employeeId);
            saveSalaries(updatedSalaries);
        }
    });
});