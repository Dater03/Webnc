$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const groupIndex = urlParams.get('index');

    function loadGroupDetails() {
        const groups = JSON.parse(localStorage.getItem('groups')) || [];
        const employees = JSON.parse(localStorage.getItem('employees')) || [];
        const group = groups[groupIndex];

        if (group) {
            $('#group-id').val(group.id);
            $('#group-name').val(group.name);
            $('#group-head').val(group.head);
            $('#group-description').val(group.description);

            $('#employee-list').empty();

            if (group.employees) {
                group.employees.forEach(employeeId => {
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
            alert('Nhóm không tồn tại!');
        }
    }

    loadGroupDetails();
});