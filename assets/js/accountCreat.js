document.addEventListener("DOMContentLoaded", function() {
    var employees = JSON.parse(localStorage.getItem('employees')) || [];
    var employeeSelect = document.getElementById('employee');
    employees.forEach(function(employee) {
        var option = new Option(employee.fullname, employee.id);
        employeeSelect.appendChild(option);
    });

    document.getElementById("avatar").addEventListener("change", function() {
        readURL(this);
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('image-preview').src = e.target.result;
                document.getElementById('image-preview').style.display = 'block';
            };
            reader.readAsDataURL(input.files[0]);
        }   
    }

    document.getElementById('create-account-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var employee = document.getElementById('employee').value;
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirm-password').value;
        var phone = document.getElementById('phone').value;
        var avatar = document.getElementById('avatar').files[0];

        if (password !== confirmPassword) {
            alert("Mật khẩu không đúng.");
            return;
        }

        var accounts = JSON.parse(localStorage.getItem('accounts')) || [];
        var accountId = 'ACC' + (accounts.length + 1).toString().padStart(4, '0');

        var reader = new FileReader();
        reader.onload = function(e) {
            var avatarData = e.target.result;
            var account = {
                id: accountId,
                employee: employee,
                username: username,
                email: email,
                password: password,
                phone: phone,
                avatar: avatarData
            };
            accounts.push(account);
            localStorage.setItem('accounts', JSON.stringify(accounts));
            localStorage.setItem('currentAccountId', accountId);
            alert("Tài khoản nhân viên đã được tạo!");
            window.location.href = 'accountList.html';
        };
        reader.readAsDataURL(avatar);
    });
});
