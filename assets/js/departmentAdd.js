$(document).ready(function () {
    var employees = JSON.parse(localStorage.getItem('employees')) || [];
    var headerSelect = $('#header-select');

    employees.forEach(function (employee) {
        headerSelect.append(new Option(employee.fullname));
    });

    function generateDepartmentId() {
        return 'DPT-' + Math.floor(Math.random() * 100);
    }
    $('#department-id').val(generateDepartmentId());
    $('#add-department-form').on('submit', function (event) {
        event.preventDefault();

        const departmentId = $('#department-id').val();
        const departmentName = $('#department-name').val();
        const departmentHead = $('#header-select').val();
        const departmentDescription = $('#department-description').val();

        const departments = JSON.parse(localStorage.getItem('departments')) || [];

        const newDepartment = {
            id: departmentId,
            name: departmentName,
            head: departmentHead,
            description: departmentDescription
        };

        departments.push(newDepartment);

        localStorage.setItem('departments', JSON.stringify(departments));

        alert('Phòng ban mới đã được tạo! Mã phòng: ' + departmentId);

        window.location.href = 'department.html';
    });
    function loadEmployees() {
        const employees = JSON.parse(localStorage.getItem('employees')) || [];

        employees.forEach(employee => {
            const option = `<option value="${employee.id}">${employee.fullname}</option>`;
            $('#employee-select').append(option);
        });
    }
});