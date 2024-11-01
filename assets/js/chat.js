function loadEmployees() {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employeeList = document.getElementById('employee-list');
    employeeList.innerHTML = '';
    employees.forEach(employee => {
        const li = document.createElement('li');
        li.textContent = employee.fullname;
        li.dataset.id = employee.id;
        employeeList.appendChild(li);
    });
}

function saveMessages(employeeId, messages) {
    const allMessages = JSON.parse(localStorage.getItem('messages')) || {};
    allMessages[employeeId] = messages;
    localStorage.setItem('messages', JSON.stringify(allMessages));
}

function loadMessages(employeeId) {
    const allMessages = JSON.parse(localStorage.getItem('messages')) || {};
    return allMessages[employeeId] || [];
}

function displayMessages(messages) {
    const chatBody = document.getElementById('chat-body');
    chatBody.innerHTML = '';
    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.style.padding = '5px';
        messageElement.style.borderBottom = '1px solid #ccc';
        messageElement.textContent = message;
        chatBody.appendChild(messageElement);
    });
    chatBody.scrollTop = chatBody.scrollHeight;
}

document.getElementById('chat-icon').addEventListener('click', function() {
    const chatWindow = document.getElementById('chat-window');
    if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
        chatWindow.style.display = 'flex';
        document.getElementById('employee-selection').style.display = 'block';
        loadEmployees();
    } else {
        chatWindow.style.display = 'none';
    }
});

document.getElementById('chat-close').addEventListener('click', function() {
    document.getElementById('chat-window').style.display = 'none';
});

document.getElementById('chat-exit').addEventListener('click', function() {
    document.getElementById('chat-window').style.display = 'none';
});

document.getElementById('chat-back').addEventListener('click', function() {
    document.getElementById('employee-selection').style.display = 'block';
    document.getElementById('chat-header').style.display = 'none';
    document.getElementById('chat-body').style.display = 'none';
    document.getElementById('chat-footer').style.display = 'none';
    document.getElementById('chat-buttons').style.display = 'none';
});

let currentEmployeeId = null;

document.getElementById('employee-list').addEventListener('click', function(e) {
    if (e.target && e.target.nodeName === 'LI') {
        currentEmployeeId = e.target.dataset.id;
        const selectedEmployeeName = e.target.textContent;

        document.getElementById('employee-selection').style.display = 'none';
        document.getElementById('chat-header').style.display = 'flex';
        document.getElementById('chat-body').style.display = 'block';
        document.getElementById('chat-footer').style.display = 'flex';
        document.getElementById('chat-buttons').style.display = 'flex';
        document.getElementById('employee-name').textContent = selectedEmployeeName;

        const messages = loadMessages(currentEmployeeId);
        displayMessages(messages);
    }
});

document.getElementById('chat-send').addEventListener('click', function() {
    const chatInput = document.getElementById('chat-input');
    if (chatInput.value.trim() !== '') {
        const message = 'Admin: ' + chatInput.value.trim();
        chatInput.value = '';

        const messages = loadMessages(currentEmployeeId);
        messages.push(message);
        saveMessages(currentEmployeeId, messages);

        displayMessages(messages);
    }
});

document.getElementById('chat-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('chat-send').click();
    }
});