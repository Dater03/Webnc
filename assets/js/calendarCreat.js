$(document).ready(function () {
    var employees = JSON.parse(localStorage.getItem('employees')) || [];
    var employeeSelect = $('#employee-select');

    employees.forEach(function (employee) {
        employeeSelect.append(new Option(employee.fullname, employee.id));
    });

    $('#calendar-form').submit(function (event) {
        event.preventDefault(); 

        var employeeId = $('#employee-select').val();
        var startTime = $('#work-start-time').val();
        var endTime = $('#work-end-time').val();
        var description = $('#description').val();

        var calendarDeatil = {
            employeeId: employeeId,
            startTime: startTime,
            endTime: endTime,
            description: description
        };

        var calendarList = JSON.parse(localStorage.getItem('calendarList')) || [];
        calendarList.push(calendarDeatil);
        localStorage.setItem('calendarList', JSON.stringify(calendarList));

        alert('Cập nhật công tác thành công!');
        window.location.href = 'calendarList.html';
    });
});