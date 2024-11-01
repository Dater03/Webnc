$(document).ready(function () {
    var accountId = localStorage.getItem("currentAccountId");
    if (accountId) {
        var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
        var account = accounts.find((acc) => acc.id === accountId);

        if (account) {
            $("#employee").append(
                new Option(account.employee, account.employee, true, true)
            );
            $("#username").val(account.username);
            $("#email").val(account.email);
            $("#phone").val(account.phone);
            $("#image-preview").attr("src", account.avatar).show();
        } else {
            alert("Không tìm thấy tài khoản.");
        }
    } else {
        alert("Không tìm thấy tài khoản.");
    }

    $("#avatar").change(function () {
        readURL(this);
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $("#image-preview").attr("src", e.target.result).show();
            };
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#edit-account-form").submit(function (event) {
        event.preventDefault();

        var username = $("#username").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var confirmPassword = $("#confirm-password").val();
        var phone = $("#phone").val();
        var avatar = $("#avatar")[0].files[0];

        if (password && password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        var updatedAccount = {
            ...account,
            username: username,
            email: email,
            password: password,
            phone: phone,
        };

        if (password) {
            updatedAccount.password = password;
        }

        if (avatar) {
            var reader = new FileReader();
            reader.onload = function (e) {
                updatedAccount.avatar = e.target.result;

                saveAccount(updatedAccount);
            };
            reader.readAsDataURL(avatar);
        } else {
            saveAccount(updatedAccount);
        }
    });

    function saveAccount(updatedAccount) {
        var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
        var accountIndex = accounts.findIndex((acc) => acc.id === accountId);

        if (accountIndex > -1) {
            accounts[accountIndex] = updatedAccount;
            localStorage.setItem("accounts", JSON.stringify(accounts));
            alert("Cập nhật tài khoản thành công.");
            window.location.href = "accountList.html";
        } else {
            alert("Không tìm thấy tài khoản.");
        }
    }
});
