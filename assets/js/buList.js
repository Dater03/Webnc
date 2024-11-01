$(document).ready(function () {
    function renderBusinessTripList() {
        let trips = localStorage.getItem("businessTrips");
        trips = trips ? JSON.parse(trips) : [];

        $("#business-trip-list").empty();

        trips.forEach((trip) => {
            $("#business-trip-list").append(`
                <tr>
                    <td>${trip.id}</td>
                    <td>${trip.area}</td>
                    <td>${trip.company}</td>
                    <td>${trip.startTime}</td>
                    <td>${trip.endTime}</td>
                    <td>
                        <button class="btn btn-info view-btn" data-id="${trip.id}">Xem</button>
                        <button class="btn btn-warning edit-btn" data-id="${trip.id}">Sửa</button>
                        <button class="btn btn-danger delete-btn" data-id="${trip.id}">Xóa</button>
                    </td>
                </tr>
            `);
        });
    }

    renderBusinessTripList();

    $(document).on("click", ".view-btn", function () {
        let tripId = $(this).data("id");
        let trips = localStorage.getItem("businessTrips");
        trips = trips ? JSON.parse(trips) : [];
        let trip = trips.find((t) => t.id === tripId);
        if (trip) {
            window.location.href = `bussinessDetail.html?tripId=${tripId}`;
        }
    });

    $(document).on("click", ".edit-btn", function () {
        let tripId = $(this).data("id");
        window.location.href = `bussinessEdit.html?tripId=${tripId}`;
    });

    $(document).on("click", ".delete-btn", function () {
        if (confirm("Bạn có chắc chắn muốn xóa công tác này?")) {
            let tripId = $(this).data("id");
            let trips = localStorage.getItem("businessTrips");
            trips = trips ? JSON.parse(trips) : [];
            trips = trips.filter((t) => t.id !== tripId);
            localStorage.setItem("businessTrips", JSON.stringify(trips));
            renderBusinessTripList();
        }
    });
});
