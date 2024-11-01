document.addEventListener("DOMContentLoaded", function () {
    const adminDetails = JSON.parse(localStorage.getItem("adminDetails"));

    if (adminDetails) {
        document.getElementById("avatar").src =
            adminDetails.avatar || "assets/img/profiles/avatar-18.jpg";
        document.getElementById("username").textContent =
            adminDetails.username || "Admin_Group6";
        document.getElementById("email").textContent =
            adminDetails.email || "admin@group6.com";
        document.getElementById("fullname").textContent =
            adminDetails.fullname || "Nguyễn Văn A";
        document.getElementById("phone").textContent =
            adminDetails.phone || "0123456789";
        document.getElementById("address").textContent =
            adminDetails.address || "123 Đường ABC, Quận XYZ, TP. HCM";
        document.getElementById("role").textContent =
            adminDetails.role || "Quản trị viên";
    }
});
document.addEventListener("DOMContentLoaded", () => {
    // Load user data from localStorage
    const userData = JSON.parse(localStorage.getItem("userProfile")) || {
        username: "Admin_Group6",
        email: "admin@group6.com",
        fullname: "Thành viên nhóm 6",
        phone: "0123456789",
        address: "Đại học Công nghiệp Hà Nội",
        role: "Quản trị viên",
        avatar: "assets/img/profiles/avatar-18.jpg",
    };

    // Populate profile fields with user data
    document.getElementById("username").textContent = userData.username;
    document.getElementById("email").textContent = userData.email;
    document.getElementById("fullname").textContent = userData.fullname;
    document.getElementById("phone").textContent = userData.phone;
    document.getElementById("address").textContent = userData.address;
    document.getElementById("role").textContent = userData.role;
    document.getElementById("avatar").src = userData.avatar;
});
