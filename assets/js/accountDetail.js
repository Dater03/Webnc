$(document).ready(function() {
    var accountId = localStorage.getItem('currentAccountId');
    if (accountId) {
    var accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    var account = accounts.find(acc => acc.id === accountId);
                
        if (account) {
            $('#employee-name').text(account.employee);
            $('#username').text(account.username);
            $('#email').text(account.email);
            $('#password').text(account.password);
            $('#phone').text(account.phone);
            $('#avatar').attr('src', account.avatar);
        } else {
            alert("Không tìm thấy tài khoản.");
        }
    } else {
        alert("Không tìm thấy tài khoản.");
    }
});