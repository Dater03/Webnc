$(document).ready(function () {
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const tripId = getQueryParam('tripId');

    if (tripId) {
        let trips = localStorage.getItem('businessTrips');
        trips = trips ? JSON.parse(trips) : [];

        const trip = trips.find(t => t.id === tripId);

        if (trip) {
            $("#detail-trip-id").val(trip.id);
            $("#detail-trip-area").val(trip.area);
            $("#detail-trip-company").val(trip.company);
            $("#detail-trip-employees").val(trip.employees.map(empId => {
                const employee = JSON.parse(localStorage.getItem('employees')).find(e => e.id === empId);
                return employee ? employee.fullname : '';
            }).join('\n'));
            $("#detail-trip-start-time").val(trip.startTime);
            $("#detail-trip-end-time").val(trip.endTime);
            $("#detail-trip-description").val(trip.description);
        } else {
            alert("Không tìm thấy công tác.");
        }
    } else {
        alert("Mã công tác không hợp lệ.");
    }
});