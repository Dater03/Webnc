$(document).ready(function () {
    function loadDepartments() {
        const departments = JSON.parse(localStorage.getItem('departments')) || [];
        $('#department-list').empty();
        departments.forEach((department, index) => {
            const row = `
                        <tr>
                            <td>${department.id}</td>
                            <td>${department.name}</td>
                            <td>${department.head}</td>
                            <td>${department.description}</td>
                            <td>
                                <button class="btn btn-info btn-sm" onclick="viewDepartment(${index})">Xem</button>
                                <button class="btn btn-warning btn-sm" onclick="editDepartment(${index})">Sửa</button>
                                <button class="btn btn-danger btn-sm" onclick="deleteDepartment(${index})">Xóa</button>
                            </td>
                        </tr>
                    `;
            $('#department-list').append(row);
        });
    }
    loadDepartments();
    window.viewDepartment = function (index) {
        window.location.href = 'departmentDetail.html?index=' + index;
    };

    window.editDepartment = function (index) {
        window.location.href = 'departmentEdit.html?index=' + index;
    };

    window.deleteDepartment = function (index) {
        if (confirm('Bạn có chắc chắn muốn xóa phòng ban này không?')) {
            let departments = JSON.parse(localStorage.getItem('departments')) || [];
            departments.splice(index, 1);
            localStorage.setItem('departments', JSON.stringify(departments));
            loadDepartments();
        }
    };
});