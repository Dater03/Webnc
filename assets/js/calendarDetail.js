$(document).ready(function () {
    var employees = JSON.parse(localStorage.getItem('employees')) || [];
    var calendarList = JSON.parse(localStorage.getItem('calendarList')) || [];
    var viewIndex = sessionStorage.getItem('viewCalendarIndex');
    var viewCalendar = calendarList[viewIndex];

    var employee = employees.find(emp => emp.id === viewCalendar.employeeId);
    var employeeName = employee ? employee.fullname : 'Unknown';

    $('#employee-view').val(employeeName);
    $('#start-time-view').val(viewCalendar.startTime);
    $('#end-time-view').val(viewCalendar.endTime);
    $('#description-view').val(viewCalendar.description);
});