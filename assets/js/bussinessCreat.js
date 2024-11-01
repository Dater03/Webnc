$(document).ready(function () {
    function generateTripId() {
        return 'CT-' + Math.floor(Math.random() * 1000000);
    }

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

    const companies = [
        "Công ty Ananas", "Công ty Binas", "Công ty Congo", "Công ty DayD", "Công ty Eily"
    ];

    const employees = JSON.parse(localStorage.getItem('employees')) || [];

    $("#trip-id").val(generateTripId());

    provinces.forEach(province => {
        $("#trip-area").append(`<option value="${province}">${province}</option>`);
    });

    companies.forEach(company => {
        $("#trip-company").append(`<option value="${company}">${company}</option>`);
    });

    employees.forEach(employee => {
        $("#trip-employees").append(`<option value="${employee.id}">${employee.fullname}</option>`);
    });

    $("#create-business-trip-form").on("submit", function (event) {
        event.preventDefault();
        var tripId = $("#trip-id").val();
        var tripArea = $("#trip-area").val();
        var tripCompany = $("#trip-company").val();
        var tripEmployees = $("#trip-employees").val();
        var tripStartTime = $("#trip-start-time").val();
        var tripEndTime = $("#trip-end-time").val();
        var tripDescription = $("#trip-description").val();

        if (tripArea && tripCompany && tripEmployees.length > 0 && tripStartTime && tripEndTime && tripDescription) {
            let trips = localStorage.getItem('businessTrips');
            trips = trips ? JSON.parse(trips) : [];

            trips.push({
                id: tripId,
                area: tripArea,
                company: tripCompany,
                employees: tripEmployees,
                startTime: tripStartTime,
                endTime: tripEndTime,
                description: tripDescription
            });

            localStorage.setItem('businessTrips', JSON.stringify(trips));

            alert("Lịch công tác đã tạo thành công!");
            $("#create-business-trip-form")[0].reset();
            $("#trip-id").val(generateTripId());
            window.location.href = "bussinessList.html";
        } else {
            alert("Please fill in all fields.");
        }
    });
});