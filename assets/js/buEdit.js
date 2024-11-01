$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const tripId = urlParams.get('tripId');
    const provinces = [
        "An Giang", "Bà Rịa - Vũng Tàu", "Bắc Giang", "Bắc Kạn", "Bạc Liêu", "Bắc Ninh", 
        "Bến Tre", "Bình Định", "Bình Dương", "Bình Phước", "Bình Thuận", "Cà Mau", 
        "Cần Thơ", "Cao Bằng", "Đà Nẵng", "Đắk Lắk", "Đắk Nông", "Điện Biên", "Đồng Nai", 
        "Đồng Tháp", "Gia Lai", "Hà Giang", "Hà Nam", "Hà Nội", "Hà Tĩnh", "Hải Dương", 
        "Hải Phòng", "Hậu Giang", "Hòa Bình", "Hưng Yên", "Khánh Hòa", "Kiên Giang", 
        "Kon Tum", "Lai Châu", "Lâm Đồng", "Lạng Sơn", "Lào Cai", "Long An", "Nam Định", 
        "Nghệ An", "Ninh Bình", "Ninh Thuận", "Phú Thọ", "Phú Yên", "Quảng Bình", 
        "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị", "Sóc Trăng", "Sơn La", 
        "Tây Ninh", "Thái Bình", "Thái Nguyên", "Thanh Hóa", "Thừa Thiên Huế", "Tiền Giang", 
        "TP Hồ Chí Minh", "Trà Vinh", "Tuyên Quang", "Vĩnh Long", "Vĩnh Phúc", "Yên Bái"
    ];
    provinces.forEach(function(province) {
        $('#trip-area').append(new Option(province, province));
    });

    const companies = [
        "Công ty Ananas", "Công ty Binas", "Công ty Congo", "Công ty DayD", "Công ty Eily"
    ];
    companies.forEach(function(company) {
        $('#trip-company').append(new Option(company, company));
    });

    let trips = localStorage.getItem('businessTrips');
    trips = trips ? JSON.parse(trips) : [];
    let trip = trips.find(t => t.id === tripId);

    if (trip) {
        $('#trip-id').val(trip.id);
        $('#trip-area').val(trip.area);
        $('#trip-company').val(trip.company);
        $('#trip-start-time').val(trip.startTime);
        $('#trip-end-time').val(trip.endTime);
    }

    $('#edit-business-trip-form').submit(function(event) {
        event.preventDefault();

        var updatedTrip = {
            id: $('#trip-id').val(),
            area: $('#trip-area').val(),
            company: $('#trip-company').val(),
            startTime: $('#trip-start-time').val(),
            endTime: $('#trip-end-time').val()
        };

        var updatedTrips = trips.map(t => t.id === tripId ? updatedTrip : t);
        localStorage.setItem('businessTrips', JSON.stringify(updatedTrips));
        alert("Lịch công tác đã được chỉnh sửa!");
        window.location.href = 'bussinessList.html';
    });
});
