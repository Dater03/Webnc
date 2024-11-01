// page ems
$(document).ready(function () {
    var employees = JSON.parse(localStorage.getItem('employees')) || [];
    var itemsPerPage = 5;
    var currentPage = 1;

    function updateEmployeeCount() {
        var employeeCount = employees.length;
        $('#employee-count').text(employeeCount);
    }

    function renderTable() {
        var start = (currentPage - 1) * itemsPerPage;
        var end = start + itemsPerPage;
        var paginatedEmployees = employees.slice(start, end);

        $('#employee-table-index').empty();
        paginatedEmployees.forEach(function (employee) {
            var row = '<tr>' +
                '<td>' + employee.id + '</td>' +
                '<td>' + employee.fullname + '</td>' +
                '<td>' + employee.status + '</td>' +
                '<td>' +
                '<button class="btn btn-info btn-sm view-employee-index" data-id="' + employee.id + '">Xem</button> ' +
                '</td>' +
                '</tr>';
            $('#employee-table-index').append(row);
        });
    }

    function renderPagination() {
        var totalPages = Math.ceil(employees.length / itemsPerPage);
        var paginationControls = $('#pagination-controls');
        paginationControls.empty();

        if (totalPages > 1) {
            if (currentPage > 1) {
                paginationControls.append('<li class="page-item"><a class="page-link" id="em" href="#" data-page="' + (currentPage - 1) + '">Previous</a></li>');
            }

            for (var i = 1; i <= totalPages; i++) {
                var activeClass = currentPage === i ? ' active' : '';
                paginationControls.append('<li class="page-item' + activeClass + '"><a id="em" class="page-link" href="#" data-page="' + i + '">' + i + '</a></li>');
            }

            if (currentPage < totalPages) {
                paginationControls.append('<li class="page-item"><a id="em" class="page-link" href="#" data-page="' + (currentPage + 1) + '">Next</a></li>');
            }
        }
    }

    updateEmployeeCount();
    function updateTableAndPagination() {
        renderTable();
        renderPagination();
    }

    $(document).on('click', '#em', function (e) {
        e.preventDefault();
        var newPage = $(this).data('page');
        if (newPage && newPage !== currentPage) {
            currentPage = newPage;
            updateTableAndPagination();
        }
    });

    $(document).on('click', '.view-employee-index', function () {
        var employeeId = $(this).data('id');
        window.location.href = 'employeeDetail.html?id=' + employeeId;
    });

    updateTableAndPagination();
});

// page sa
$(document).ready(function () {
    var salaries = JSON.parse(localStorage.getItem('salaries')) || [];
    var itemsPerPageS = 5;
    var currentPageS = 1;

    function renderTableS() {
        var startS = (currentPageS - 1) * itemsPerPageS;
        var endS = startS + itemsPerPageS;
        var paginatedSalaries = salaries.slice(startS, endS);

        $('#salary-table-index').empty();
        paginatedSalaries.forEach(function (salary) {
            var row = '<tr>' +
                '<td>' + salary.employeeId + '</td>' +
                '<td>' + salary.dailySalary + '</td>' +
                '<td>' + salary.workingDays + '</td>' +
                '<td>' + salary.allowance + '</td>' +
                '<td>' + salary.totalSalary + '</td>' +
                '<td>' +
                '<button class="btn btn-info btn-sm viewSa-btn" data-id="' + salary.employeeId + '">Xem</button> ' +
                '</td>' +
                '</tr>';
            $('#salary-table-index').append(row);
        });
    }

    function renderPaginationS() {
        var totalPagesS = Math.ceil(salaries.length / itemsPerPageS);
        var paginationControlsS = $('#pagination-controlsS');
        paginationControlsS.empty();

        if (totalPagesS > 1) {
            if (currentPageS > 1) {
                paginationControlsS.append('<li class="page-item"><a class="page-link" id="salary" href="#" data-page="' + (currentPageS - 1) + '">Previous</a></li>');
            }

            for (var i = 1; i <= totalPagesS; i++) {
                var activeClassS = currentPageS === i ? ' active' : '';
                paginationControlsS.append('<li class="page-item' + activeClassS + '"><a class="page-link" id="salary" href="#" data-page="' + i + '">' + i + '</a></li>');
            }

            if (currentPageS < totalPagesS) {
                paginationControlsS.append('<li class="page-item"><a class="page-link" id="salary" href="#" data-page="' + (currentPageS + 1) + '">Next</a></li>');
            }
        }
    }

    function updateTableAndPaginationS() {
        renderTableS();
        renderPaginationS();
    }

    $(document).on('click', '#salary', function (e) {
        e.preventDefault();
        var newPageS = $(this).data('page');
        if (newPageS && newPageS !== currentPageS) {
            currentPageS = newPageS;
            updateTableAndPaginationS();
        }
    });

    $(document).on('click', '.viewSa-btn', function () {
        var salaryId = $(this).data('id');
        window.location.href = 'salaryDetail.html?id=' + salaryId;
    });

    updateTableAndPaginationS();
});

// page de
$(document).ready(function () {
    var departments = JSON.parse(localStorage.getItem('departments')) || [];
    var itemsPerPageD = 5;
    var currentPageD = 1;

    function updateDepartmentCount() {
        var departmentCount = departments.length;
        $('#department-count').text(departmentCount);
    }

    function renderTableD() {
        var startD = (currentPageD - 1) * itemsPerPageD;
        var endD = startD + itemsPerPageD;
        var paginatedDepartments = departments.slice(startD, endD);

        $('#department-table-index').empty();
        paginatedDepartments.forEach(function (department) {
            const row = `
                <tr>
                    <td>${department.id}</td>
                    <td>${department.name}</td>
                    <td>${department.head}</td>
                    <td>
                        <button class="btn btn-info btn-sm" onclick="viewDepartment(${department.id})">Xem</button>
                    </td>
                </tr>
            `;
            $('#department-table-index').append(row);
        });
    }

    function renderPaginationD() {
        var totalPagesD = Math.ceil(departments.length / itemsPerPageD);
        var paginationControlsD = $('#pagination-controlsD');
        paginationControlsD.empty();

        if (totalPagesD > 1) {
            if (currentPageD > 1) {
                paginationControlsD.append('<li class="page-item"><a class="page-link" href="#" data-page="' + (currentPageD - 1) + '">Previous</a></li>');
            }

            for (var i = 1; i <= totalPagesD; i++) {
                var activeClassD = currentPageD === i ? ' active' : '';
                paginationControlsD.append('<li class="page-item' + activeClassD + '"><a class="page-link" href="#" data-page="' + i + '">' + i + '</a></li>');
            }

            if (currentPageD < totalPagesD) {
                paginationControlsD.append('<li class="page-item"><a class="page-link" href="#" data-page="' + (currentPageD + 1) + '">Next</a></li>');
            }
        }
    }

    updateDepartmentCount();
    function updateTableAndPaginationD() {
        renderTableD();
        renderPaginationD();
    }

    $(document).on('click', '#pagination-controlsD a', function (e) {
        e.preventDefault();
        var newPageD = $(this).data('page');
        if (newPageD && newPageD !== currentPageD) {
            currentPageD = newPageD;
            updateTableAndPaginationD();
        }
    });

    window.viewDepartment = function (index) {
        window.location.href = 'departmentDetail.html?index=' + index;
    };

    updateTableAndPaginationD();
});


// search
function searchTable(searchFormId, searchInputId, tableBodyId) {
    document.getElementById(searchFormId).addEventListener('submit', function (e) {
        e.preventDefault();
        let searchValue = document.getElementById(searchInputId).value.toLowerCase();
        let tableBody = document.getElementById(tableBodyId);
        let rows = tableBody.getElementsByTagName('tr');
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            let cells = row.getElementsByTagName('td');
            let found = false;
            for (let j = 0; j < cells.length; j++) {
                if (cells[j].innerText.toLowerCase().includes(searchValue)) {
                    found = true;
                    break;
                }
            }
            if (found) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        }
    });
}
searchTable('employee-search-form', 'employee-search-input', 'employee-table-index');
searchTable('department-search-form', 'department-search-input', 'department-table-index');
searchTable('salary-search-form', 'salary-search-input', 'salary-table-index');

// login
$(document).ready(function () {
    if (localStorage.getItem('loggedIn') === 'true') {
        $('#welcomeModal').modal('show');
        localStorage.removeItem('loggedIn'); 
    }
});

// day
document.addEventListener('DOMContentLoaded', function() {
    function formatDate(date) {
        const months = [
            '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'
        ];
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        return `Ngày ${day} Tháng ${month} Năm ${year}`;
    }

    const today = new Date();
    const formattedDate = formatDate(today);
    document.getElementById('current-date').textContent = formattedDate;
});
