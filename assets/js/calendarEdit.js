$(document).ready(function () {
    var employees = JSON.parse(localStorage.getItem('employees')) || [];
    var calendarList = JSON.parse(localStorage.getItem('calendarList')) || [];
    var editIndex = sessionStorage.getItem('editCalendarIndex');
    var editCalendar = calendarList[editIndex];

    var employeeSelect = $('#employee-select');

    employees.forEach(function (employee) {
        var option = $('<option>', {
            value: employee.id,
            text: employee.fullname
        });

        if (employee.id === editCalendar.employeeId) {
            option.attr('selected', 'selected');
        }

        employeeSelect.append(option);
    });

    $('#start-time').val(editCalendar.startTime);
    $('#end-time').val(editCalendar.endTime);
    $('#description').val(editCalendar.description);

    $('#edit-calendar-form').on('submit', function (e) {
        e.preventDefault();

        editCalendar.employeeId = $('#employee-select').val();
        editCalendar.startTime = $('#start-time').val();
        editCalendar.endTime = $('#end-time').val();
        editCalendar.description = $('#description').val();

        calendarList[editIndex] = editCalendar;
        localStorage.setItem('calendarList', JSON.stringify(calendarList));
        sessionStorage.removeItem('editCalendarIndex');
        alert("Lịch làm đã được sửa!");
        window.location.href = 'calendarList.html';
    });
});