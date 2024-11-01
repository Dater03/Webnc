$(document).ready(function () {
    function loadGroups() {
        const groups = JSON.parse(localStorage.getItem('groups')) || [];
        $('#group-list').empty();
        
        groups.forEach((group, index) => {
            const row = `
                        <tr>
                            <td>${group.id}</td>
                            <td>${group.name}</td>
                            <td>${group.head}</td>
                            <td>${group.description}</td>
                            <td>
                                <button class="btn btn-info btn-sm" onclick="viewGroup(${index})">Xem</button>
                                <button class="btn btn-warning btn-sm" onclick="editGroup(${index})">Sửa</button>
                                <button class="btn btn-danger btn-sm" onclick="deleteGroup(${index})">Xóa</button>
                            </td>
                        </tr>
                    `;
            $('#group-list').append(row);
        });
    }

    const groups = JSON.parse(localStorage.getItem('groups')) || [];
    $('#group-list').empty();

    function updateGroupCount() {
        var groupCount = groups.length;
        $('#group-count').text(groupCount);
    }

    updateGroupCount();

    loadGroups();
    window.viewGroup = function (index) {
        window.location.href = 'groupDetail.html?index=' + index;
    };

    window.editGroup = function (index) {
        window.location.href = 'groupEdit.html?index=' + index;
    };

    window.deleteGroup = function (index) {
        if (confirm('Bạn có chắc chắn muốn xóa nhóm nhân viên này không?')) {
            let groups = JSON.parse(localStorage.getItem('groups')) || [];
            groups.splice(index, 1);
            localStorage.setItem('groups', JSON.stringify(groups));
            loadGroups();
        }
    };
});