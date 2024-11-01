$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const departmentIndex = urlParams.get("index");

    function loadDepartmentDetails() {
        const departments = JSON.parse(localStorage.getItem("departments")) || [];
        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        const department = departments[departmentIndex];

        if (department) {
            $("#department-id").val(department.id);
            $("#department-name").val(department.name);
            $("#department-head").val(department.head);
            $("#department-description").val(department.description);

            $("#employee-list").empty();
            if (department.employees) {
                department.employees.forEach((employeeId) => {
                    const employee = employees.find((emp) => emp.id === employeeId);
                    if (employee) {
                        const row = `
                                <tr>
                                    <td>${employee.id}</td>
                                    <td>${employee.fullname}</td>
                                    <td>${employee.position}</td>
                                    <td>
                                        <button class="btn btn-danger btn-sm delete-employee" data-id="${employee.id}">Xóa</button>
                                    </td>
                                </tr>
                            `;
                        $("#employee-list").append(row);
                    }
                });
            }
        } else {
            alert("Phòng ban không tồn tại!");
        }
    }

    function saveDepartmentDetails() {
        const departments = JSON.parse(localStorage.getItem("departments")) || [];
        const department = departments[departmentIndex];

        if (department) {
            department.name = $("#department-name").val();
            department.head = $("#department-head").val();
            department.description = $("#department-description").val();

            const employeeIds = [];
            $("#employee-list tr").each(function () {
                const id = $(this).find(".delete-employee").data("id");
                employeeIds.push(id);
            });
            department.employees = employeeIds;

            localStorage.setItem("departments", JSON.stringify(departments));
            alert("Cập nhật thành công!");
            window.location.href = "department.html";
        } else {
            alert("Phòng ban không tồn tại!");
        }
    }

    $("#save-btn").click(function () {
        saveDepartmentDetails();
    });

    $("#employee-list").on("click", ".delete-employee", function () {
        $(this).closest("tr").remove();
    });

    $("#add-employee-btn").click(function () {
        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        $("#modal-employee-list").empty();

        employees.forEach((employee) => {
            const row = `
                    <tr>
                        <td>${employee.id}</td>
                        <td>${employee.fullname}</td>
                        <td>${employee.position}</td>
                        <td>
                            <button class="btn btn-secondary btn-sm select-employee" data-id="${employee.id}">Chọn</button>
                        </td>
                    </tr>
                `;
            $("#modal-employee-list").append(row);
        });

        $("#employeeModal").modal("show");
    });

    $("#modal-employee-list").on("click", ".select-employee", function () {
        const employeeId = $(this).data("id");
        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        const employee = employees.find((emp) => emp.id === employeeId);

        if (employee) {
            const row = `
                    <tr>
                        <td>${employee.id}</td>
                        <td>${employee.fullname}</td>
                        <td>${employee.position}</td>
                        <td>
                            <button class="btn btn-danger btn-sm delete-employee" data-id="${employee.id}">Xóa</button>
                        </td>
                    </tr>
                `;
            $("#employee-list").append(row);
            $("#employeeModal").modal("hide");
        } else {
            alert("Nhân viên không tồn tại!");
        }
    });

    loadDepartmentDetails();
});
