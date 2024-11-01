
$(document).ready(function () {
    var calendarList = JSON.parse(localStorage.getItem('calendarList')) || [];
    var employees = JSON.parse(localStorage.getItem('employees')) || [];
    var calendarTableBody = $('#calendar-list');

    function renderCalendarList() {
        calendarTableBody.empty();

        calendarList.forEach(function (calendar, index) {
            var employee = employees.find(emp => emp.id === calendar.employeeId);
            var employeeName = employee ? employee.fullname : 'Unknown';

            var row = '<tr>' +
                '<td>' + employeeName + '</td>' +
                '<td>' + calendar.startTime + '</td>' +
                '<td>' + calendar.endTime + '</td>' +
                '<td>' + calendar.description + '</td>' +
                '<td>' +
                '<button class="btn btn-info btn-sm view-btn" data-index="' + index + '">Xem</button> ' +
                '<button class="btn btn-warning btn-sm edit-btn" data-index="' + index + '">Sửa</button> ' +
                '<button class="btn btn-danger btn-sm delete-btn" data-index="' + index + '">Xóa</button>' +
                '</td>' +
                '</tr>';

            calendarTableBody.append(row);
        });

        $('.view-btn').on('click', handleView);
        $('.edit-btn').on('click', handleEdit);
        $('.delete-btn').on('click', handleDelete);
    }

    function handleView() {
        var index = $(this).data('index');
        sessionStorage.setItem('viewCalendarIndex', index);
        window.location.href = 'calendarDetail.html';
    }

    function handleEdit() {
        var index = $(this).data('index');
        sessionStorage.setItem('editCalendarIndex', index);
        window.location.href = 'calendarEdit.html';
    }

    function handleDelete() {
        if (confirm('Bạn có chắc chắn muốn xóa lịch làm này?')) {
            var index = $(this).data('index');
            calendarList.splice(index, 1);
            localStorage.setItem('calendarList', JSON.stringify(calendarList));
            renderCalendarList();
        }

    }

    renderCalendarList();
});