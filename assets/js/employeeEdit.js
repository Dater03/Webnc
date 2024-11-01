$(document).ready(function () {
    var employeeId = new URLSearchParams(window.location.search).get('id');
    var employees = JSON.parse(localStorage.getItem('employees')) || [];
    var employee = employees.find(emp => emp.id === employeeId);
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

    if (employee) {
        $('#employee-id').val(employee.id);
        $('#fullname').val(employee.fullname);
        $('#birthdate').val(employee.birthdate);
        $('#gender').val(employee.gender);
        $('#province').val(employee.province);
        $('#identity-number').val(employee.identityNumber);
        $('#issue-date').val(employee.issueDate);
        $('#issue-place').val(employee.issuePlace);
        $('#nationality').val(employee.nationality);
        $('#ethnicity').val(employee.ethnicity);
        $('#religion').val(employee.religion);
        $('#address').val(employee.address);
        $('#email').val(employee.email);
        $('#phone').val(employee.phone);
        $('#position').val(employee.position);
        $('#department').val(employee.department);
        $('#startdate').val(employee.startDate);
        $('#salary').val(employee.salary);
        $('#education').val(employee.education);
        $('#experience').val(employee.experience);
        $('#status').val(employee.status);
        if (employee.photo) {
            $('#current-photo').attr('src', employee.photo).show();
        }
    }

    $('#save-btn').click(function () {
        employee.fullname = $('#fullname').val();
        employee.birthdate = $('#birthdate').val();
        employee.gender = $('#gender').val();
        employee.province = $('#province').val();
        employee.identityNumber = $('#identity-number').val();
        employee.issueDate = $('#issue-date').val();
        employee.issuePlace = $('#issue-place').val();
        employee.nationality = $('#nationality').val();
        employee.ethnicity = $('#ethnicity').val();
        employee.religion = $('#religion').val();
        employee.address = $('#address').val();
        employee.email = $('#email').val();
        employee.phone = $('#phone').val();
        employee.position = $('#position').val();
        employee.department = $('#department').val();
        employee.startDate = $('#startdate').val();
        employee.salary = $('#salary').val();
        employee.education = $('#education').val();
        employee.experience = $('#experience').val();
        employee.status = $('#status').val();

        if ($('#employee-photo')[0].files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                employee.photo = e.target.result;
                employees = employees.map(emp => emp.id === employeeId ? employee : emp);
                localStorage.setItem('employees', JSON.stringify(employees));
                window.location.href = 'employee.html';
            }
            reader.readAsDataURL($('#employee-photo')[0].files[0]);
        } else {
            employees = employees.map(emp => emp.id === employeeId ? employee : emp);
            localStorage.setItem('employees', JSON.stringify(employees));
            alert("Nhân viên đã được sửa!");
            window.location.href = 'employee.html';
        }
    });
});