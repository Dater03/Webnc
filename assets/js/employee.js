$(document).ready(function () {
    var employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.forEach(function (employee) {
        var row = '<tr>' +
            '<td>' + employee.id + '</td>' +
            '<td>' + employee.fullname + '</td>' +
            '<td>' + employee.gender + '</td>' +
            '<td>' + employee.birthdate + '</td>' +
            '<td>' + employee.province + '</td>' +
            '<td>' + employee.department + '</td>' +
            '<td>' + employee.status + '</td>' +
            '<td>' +
            '<button class="btn btn-info btn-sm view-btn" data-id="' + employee.id + '">Xem</button> ' +
            '<button class="btn btn-warning btn-sm edit-btn" data-id="' + employee.id + '">Sửa</button> ' +
            '<button class="btn btn-danger btn-sm delete-btn" data-id="' + employee.id + '">Xóa</button>' +
            '</td>' +
            '</tr>';
        $('#employee-table-body').append(row);
    });
    $(document).on('click', '.view-btn', function () {
        var employeeId = $(this).data('id');
        window.location.href = 'employeeDetail.html?id=' + employeeId;
    });
    $(document).on('click', '.edit-btn', function () {
        var employeeId = $(this).data('id');
        window.location.href = 'employeeEdit.html?id=' + employeeId;
    });
    $(document).on('click', '.delete-btn', function () {
        if (confirm("Bạn có chắc chắn muốn xóa nhân viên này?")) {
            var employeeId = $(this).data('id');
            var employees = JSON.parse(localStorage.getItem('employees')) || [];
            var updatedEmployees = employees.filter(function (employee) {
                return employee.id !== employeeId;
            });
            localStorage.setItem('employees', JSON.stringify(updatedEmployees));
            location.reload();
        }
    });
});