$(document).ready(function () {
    $('#employee-id').val('NV-' + Math.floor(Math.random() * 100));

    $('#province, #position, #department, #education').select2();

    document.getElementById("employee-photo").addEventListener("change", function() {
        readURL(this);
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('image-preview').src = e.target.result;
                document.getElementById('image-preview').style.display = 'block';
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    var provinces = [
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
    provinces.forEach(function (province) {
        $('#province').append(new Option(province, province));
    });

    var jobPositions = ["Quản lý nhân sự", "Kế toán", "Kiểm toán", "Bán hàng", "Thiết kế", "Marketing"];
    var departments = ["Nhân sự", "Tài chính", "Marketing", "Kinh doanh", "Thiết kế"];

    jobPositions.forEach(function (position) {
        $('#position').append(new Option(position, position));
    });

    departments.forEach(function (department) {
        $('#department').append(new Option(department, department));
    });

    var educationLevels = ["Trung học phổ thông", "Cao đẳng", "Đại học"];
    educationLevels.forEach(function (level) {
        $('#education').append(new Option(level, level));
    });

    $('#employee-form').submit(function (event) {
        event.preventDefault();

        var photo = document.getElementById('employee-photo').files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            var photoData = e.target.result;
            var employeeData = {
                id: $('#employee-id').val(),
                fullname: $('#fullname').val(),
                birthdate: $('#birthdate').val(),
                gender: $('input[name="gender"]:checked').val(),
                province: $('#province').val(),
                identityNumber: $('#identity-number').val(),
                issueDate: $('#issue-date').val(),
                issuePlace: $('#issue-place').val(),
                nationality: $('#nationality').val(),
                ethnicity: $('#ethnicity').val(),
                religion: $('#religion').val(),
                address: $('#address').val(),
                email: $('#email').val(),
                phone: $('#phone').val(),
                position: $('#position').val(),
                department: $('#department').val(),
                startDate: $('#startdate').val(),
                salary: $('#salary').val(),
                education: $('#education').val(),
                experience: $('#experience').val(),
                status: $('#status').val(),
                photo: photoData
            };
            var employees = JSON.parse(localStorage.getItem('employees')) || [];
            employees.push(employeeData);
            localStorage.setItem('employees', JSON.stringify(employees));

            alert("Nhân viên mới đã được tạo!");
            window.location.href = 'employee.html';
        };
        reader.readAsDataURL(photo);
    });
});

// grid
document.getElementById('employee-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('employee-name').value;
    var id = document.getElementById('employee-id').value;
    var department = document.getElementById('employee-department').value;
    var photoURL = document.getElementById('employee-photo').src = employeeData.photo;

    var reader = new FileReader();
    reader.onload = function (e) {

        var newEmployee = {
            name: name,
            id: id,
            department: department,
            photo: photoURL
        };

        var employees = JSON.parse(localStorage.getItem('employees')) || [];
        employees.push(newEmployee);
        localStorage.setItem('employees', JSON.stringify(employees));

        window.location.href = 'employee-grid.html';
    };

    if (photo) {
        reader.readAsDataURL(photo);
    } else {
        reader.onloadend();
    }
});