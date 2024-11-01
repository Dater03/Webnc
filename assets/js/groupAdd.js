$(document).ready(function() {
        var employees = JSON.parse(localStorage.getItem('employees')) || [];
        var headerSelect = $('#header-select');

        employees.forEach(function(employee) {
            headerSelect.append(new Option(employee.fullname));
        });

        function generateGroupId() {
            return 'GP-' + Math.floor(Math.random() * 100);
        }
        $('#group-id').val(generateGroupId());
        $('#add-group-form').on('submit', function(event) {
            event.preventDefault();

            const groupId = $('#group-id').val();
            const groupName = $('#group-name').val();
            const groupHead = $('#header-select').val();
            const groupDescription = $('#group-description').val();

            const groups = JSON.parse(localStorage.getItem('groups')) || [];

            const newGroup = {
                id: groupId,
                name: groupName,
                head: groupHead,
                description: groupDescription
            };

            groups.push(newGroup);

            localStorage.setItem('groups', JSON.stringify(groups));

            alert('Nhóm mới đã được tạo! Mã nhóm: ' + groupId);

            window.location.href = 'group.html';
        });
        function loadEmployees() {
            const employees = JSON.parse(localStorage.getItem('employees')) || [];

            employees.forEach(employee => {
                const option = `<option value="${employee.id}">${employee.fullname}</option>`;
                $('#employee-select').append(option);
            });
        }
    });