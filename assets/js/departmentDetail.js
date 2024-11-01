$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const departmentIndex = urlParams.get('index');

    function loadDepartmentDetails() {
        const departments = JSON.parse(localStorage.getItem('departments')) || [];
        const employees = JSON.parse(localStorage.getItem('employees')) || [];
        const department = departments[departmentIndex];

        if (department) {
            $('#department-id').val(department.id);
            $('#department-name').val(department.name);
            $('#department-head').val(department.head);
            $('#department-description').val(department.description);

            $('#employee-list').empty();

            if (department.employees) {
                department.employees.forEach(employeeId => {
                    const employee = employees.find(emp => emp.id === employeeId);
                    if (employee) {
                        const row = `
                            <tr>
                                <td>${employee.id}</td>
                                <td>${employee.fullname}</td>
                                <td>${employee.position}</td>
                            </tr>
                        `;
                        $('#employee-list').append(row);
                    }
                });
            }
        } else {
            alert('Phòng ban không tồn tại!');
        }
    }

    loadDepartmentDetails();
});