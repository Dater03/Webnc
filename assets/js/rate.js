var employees = JSON.parse(localStorage.getItem('employees')) || [];
var employeeSelect = $('#employee-select');
employees.forEach(function (employee) {
    employeeSelect.append(new Option(employee.fullname));
});

let entries = JSON.parse(localStorage.getItem('entries')) || [];
let editIndex = -1;

function renderTable() {
    const tbody = $('#entry-table tbody');
    tbody.empty();
    entries.forEach((entry, index) => {
        tbody.append(`
                <tr data-index="${index}">
                    <td>${index + 1}</td>
                    <td>${entry.employeeSelect}</td>
                    <td>${entry.type}</td>
                    <td>${entry.description}</td>
                    <td>
                        <button class="btn btn-sm btn-secondary edit-entry">Sửa</button>
                        <button class="btn btn-sm btn-danger delete-entry">Xóa</button>
                    </td>
                </tr>
            `);
    });
}

function resetForm() {
    $('#employee-select').val('');
    $('#entry-type').val('Khen thưởng');
    $('#entry-description').val('');
    editIndex = -1;
}

$('#save-entry').click(function () {
    const employeeSelect = $('#employee-select').val().trim();
    const type = $('#entry-type').val();
    const description = $('#entry-description').val().trim();

    if (!employeeSelect || !type) {
        alert('Vui lòng chọn nhân viên và loại đánh giá.');
        return;
    }

    if (editIndex === -1) {
        entries.push({ employeeSelect, type, description });
    } else {
        entries[editIndex] = { employeeSelect, type, description };
    }

    localStorage.setItem('entries', JSON.stringify(entries));
    alert("Thêm/ Sửa thành công!");
    renderTable();
    resetForm();
});

$('#entry-table').on('click', '.edit-entry', function () {
    const index = $(this).closest('tr').data('index');
    const entry = entries[index];

    $('#employee-select').val(entry.employeeSelect);
    $('#entry-type').val(entry.type);
    $('#entry-description').val(entry.description);

    editIndex = index;
});

$('#entry-table').on('click', '.delete-entry', function () {
    if (confirm("Bạn có chắc chắn muốn xóa?")) {
        const index = $(this).closest('tr').data('index');
        entries.splice(index, 1);
        localStorage.setItem('entries', JSON.stringify(entries));
        renderTable();
    }
});

$(document).ready(function () {
    renderTable();
});