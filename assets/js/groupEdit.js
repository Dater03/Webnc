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
                                            <td>
                                                <button class="btn btn-danger btn-sm delete-employee" data-id="${employee.id}">Xóa</button>
                                            </td>
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

    function saveGroupDetails() {
        const groups = JSON.parse(localStorage.getItem('groups')) || [];
        const group = groups[groupIndex];

        if (group) {
            group.name = $('#group-name').val();
            group.head = $('#group-head').val();
            group.description = $('#group-description').val();

            const employeeIds = [];
            $('#employee-list tr').each(function () {
                const id = $(this).find('.delete-employee').data('id');
                employeeIds.push(id);
            });
            group.employees = employeeIds;

            localStorage.setItem('groups', JSON.stringify(groups));
            alert('Cập nhật thành công!');
            window.location.href = 'group.html';
        } else {
            alert('Nhóm không tồn tại!');
        }
    }

    $('#save-btn').click(function () {
        saveGroupDetails();
    });

    $('#employee-list').on('click', '.delete-employee', function () {
        $(this).closest('tr').remove();
    });

    $('#add-employee-btn').click(function () {
        const employees = JSON.parse(localStorage.getItem('employees')) || [];
        $('#modal-employee-list').empty();

        employees.forEach(employee => {
            const row = `
                            <tr>
                                <td>${employee.id}</td>
                                <td>${employee.fullname}</td>
                                <td>${employee.position}</td>
                                <td>
                                    <button class="btn btn-secondary btn-sm select-employee" data-id="${employee.id}">Chọn</button>
                                </td>
                            </tr>
                        `;
            $('#modal-employee-list').append(row);
        });

        $('#employeeModal').modal('show');
    });

    $('#modal-employee-list').on('click', '.select-employee', function () {
        const employeeId = $(this).data('id');
        const employees = JSON.parse(localStorage.getItem('employees')) || [];
        const employee = employees.find(emp => emp.id === employeeId);

        if (employee) {
            const row = `
                            <tr>
                                <td>${employee.id}</td>
                                <td>${employee.fullname}</td>
                                <td>${employee.position}</td>
                                <td>
                                    <button class="btn btn-danger btn-sm delete-employee" data-id="${employee.id}">Xóa</button>
                                </td>
                            </tr>
                        `;
            $('#employee-list').append(row);
            $('#employeeModal').modal('hide');
        } else {
            alert('Nhân viên không tồn tại!');
        }
    });

    loadGroupDetails();
});