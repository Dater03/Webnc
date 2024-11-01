function loadEmployees() {
    var employees = JSON.parse(localStorage.getItem('employees')) || [];
    var employeeList = document.getElementById('employee-list');

    employees.forEach(function (employee) {
        var card = createEmployeeCard(employee);
        employeeList.appendChild(card);
    });
}

function createEmployeeCard(employee) {
    var card = document.createElement('div');
    card.className = 'col-xl-4 col-sm-12 col-12';

    card.innerHTML = `
        <div class="employee_grid">
            <img class="rounded-circle" style="width:150px" src="${employee.photo}" alt="profile" />
            <h5>${employee.fullname}</h5>
            <label>Mã nhân viên: ${employee.id}</label>
            <label>Nhân viên phòng: ${employee.department}</label>
            <label>Trạng thái: ${employee.status}</label>
            <div class="actions">
                <button class="btn btn-info btn-sm view-btn" data-id="${employee.id}">Xem</button>
                <button class="btn btn-warning btn-sm edit-btn" data-id="${employee.id}">Sửa</button> 
                <button class="btn btn-danger btn-sm delete-btn" data-id="${employee.id}">Xóa</button>
            </div>
        </div>
    `;
    return card;
}

$(document).on('click', '.view-btn', function () {
    var employeeId = $(this).data('id');
    window.location.href = 'employeeDetail.html?id=' + employeeId;
});
$(document).on('click', '.edit-btn', function () {
    var employeeId = $(this).data('id');
    window.location.href = 'employeeEdit.html?id=' + employeeId;
});
$(document).on('click', '.delete-btn', function () {
    if (confirm("Bạn có chắc chắn muốn xóa nhân viên này?")) {
        var employeeId = $(this).data('id');
        var employees = JSON.parse(localStorage.getItem('employees')) || [];
        var updatedEmployees = employees.filter(function (employee) {
            return employee.id !== employeeId;
        });
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
        location.reload();
    }
});
document.addEventListener('DOMContentLoaded', loadEmployees);