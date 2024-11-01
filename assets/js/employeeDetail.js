$(document).ready(function () {
    var employeeId = new URLSearchParams(window.location.search).get('id');
    var employees = JSON.parse(localStorage.getItem('employees')) || [];
    var employee = employees.find(emp => emp.id === employeeId);

    if (employee) {
        $('#employee-id').val(employee.id);
        $('#fullname').val(employee.fullname);
        $('#birthdate').val(employee.birthdate);
        $('#gender').val(employee.gender);
        $('#address').val(employee.address);
        $('#identity-number').val(employee.identityNumber);
        $('#issue-date').val(employee.issueDate);
        $('#issue-place').val(employee.issuePlace);
        $('#nationality').val(employee.nationality);
        $('#ethnicity').val(employee.ethnicity);
        $('#religion').val(employee.religion);
        $('#email').val(employee.email);
        $('#phone').val(employee.phone);
        $('#position').val(employee.position);
        $('#department').val(employee.department);
        $('#startdate').val(employee.startDate);
        $('#salary').val(employee.salary);
        $('#education').val(employee.education);
        $('#experience').val(employee.experience);
        $('#status').val(employee.status);
        if (employee.photo) {
            $('#employee-photo').attr('src', employee.photo).show;
        } else {
            $('#employee-photo').attr('src', 'assets/img/user.jpg'); 
        }

    }
});