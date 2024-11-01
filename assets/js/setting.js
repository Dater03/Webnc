document.getElementById('update-logo-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('app-logo');            
    if (fileInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('site-logo').src = e.target.result;
        }
        reader.readAsDataURL(fileInput.files[0]);       
    }
    alert("logo đã được cập nhật thành công!")
});
document.getElementById('update-btn').addEventListener('click', function(event) {
    alert("Ccập nhật thông báo thành công!")
});
        
document.addEventListener('DOMContentLoaded', () => {
    const userData = JSON.parse(localStorage.getItem('userProfile')) || {
        username: 'Admin_Group6',
        email: 'admin@group6.com',
        fullname: 'Thành viên nhóm 6',
        phone: '0123456789',
        address: 'Đại học Công nghiệp Hà Nội',
        role: 'Quản trị viên',
        avatar: 'assets/img/profiles/avatar-18.jpg'
    };

    document.getElementById('username').value = userData.username;
    document.getElementById('email').value = userData.email;
    document.getElementById('fullname').value = userData.fullname;
    document.getElementById('phone').value = userData.phone;
    document.getElementById('address').value = userData.address;
    document.getElementById('role').value = userData.role;
    document.getElementById('avatar-preview').src = userData.avatar;

    document.getElementById('avatar').addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                document.getElementById('avatar-preview').src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    document.getElementById('settings-form').addEventListener('submit', (event) => {
        event.preventDefault();
        
        const updatedUserData = {
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            fullname: document.getElementById('fullname').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            role: document.getElementById('role').value,
            avatar: document.getElementById('avatar-preview').src
        };
        
        localStorage.setItem('userProfile', JSON.stringify(updatedUserData));
        alert('Thông tin đã được lưu');
        window.location.href = 'accountProfile.html';
    });
});


