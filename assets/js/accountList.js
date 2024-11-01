$(document).ready(function () {
    var accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    var accountList = $('#account-list');

    function updateAccountCount() {
        var accountCount = accounts.length;
        $('#account-count').text(accountCount);
    }

    accounts.forEach(function (account, index) {
        var row = '<tr>' +
            '<td>' + account.employee + '</td>' +
            '<td>' + account.username + '</td>' +
            '<td>' + account.email + '</td>' +
            '<td>' + account.phone + '</td>' +
            '<td>' +
            '<button class="btn btn-info btn-view" data-index="' + index + '">Xem</button> ' +
            '<button class="btn btn-warning btn-edit" data-index="' + index + '">Sửa</button> ' +
            '<button class="btn btn-danger btn-delete" data-index="' + index + '">Xóa</button>' +
            '</td>' +
            '</tr>';
        accountList.append(row);
    });

    updateAccountCount();

    $('.btn-view').on('click', function () {
        var index = $(this).data('index');
        localStorage.setItem('currentAccountIndex', index);
        window.location.href = 'accountDetail.html';
    });

    $('.btn-edit').on('click', function () {
        var index = $(this).data('index');
        localStorage.setItem('currentAccountIndex', index);
        window.location.href = 'accountEdit.html';
    });

    $('.btn-delete').on('click', function () {
        if (confirm("Bạn có chắc chắn muốn xóa tài khoản?")) {
            var index = $(this).data('index');
            accounts.splice(index, 1);
            localStorage.setItem('accounts', JSON.stringify(accounts));
            window.location.reload();
        }
    });
});