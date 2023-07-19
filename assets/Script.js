document.getElementById("claim-button").addEventListener("click", function () {
    // Lấy các giá trị người dùng đã nhập vào từ các trường input
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    // Xóa thông báo lỗi trước khi kiểm tra lại
    document.getElementById("first-name-error").textContent = "";
    document.getElementById("last-name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("password-error").textContent = "";

    // Kiểm tra và hiển thị thông báo lỗi nếu cần thiết
    if (firstName === "") {
        document.getElementById("first-name-error").textContent = "First Name cannot be empty.";
        document.getElementById("first-name").classList.add("error");
        document.getElementById("first-name-icon").style.display = "inline-block";
    } else {
        document.getElementById("first-name").classList.remove("error");
        document.getElementById("first-name-icon").style.display = "none";
    }

    if (lastName === "") {
        document.getElementById("last-name-error").textContent = "Lasst Name cannot be empty.";
        document.getElementById("last-name").classList.add("error");
        document.getElementById("last-name-icon").style.display = "inline-block";
    } else {
        document.getElementById("last-name").classList.remove("error");
        document.getElementById("last-name-icon").style.display = "none";
    }

    if (email === ""  || !emailRegex.test(email)) {
        document.getElementById("email-error").textContent = "Looks like this is not an email.";
        document.getElementById("email").classList.add("error");
        document.getElementById("email-icon").style.display = "inline-block";
    } else {
        document.getElementById("email").classList.remove("error");
        document.getElementById("email-icon").style.display = "none";
    }

    if (password === "") {
        document.getElementById("password-error").textContent = "Passoword cannot be empty.";
        document.getElementById("password").classList.add("error");
        document.getElementById("password-icon").style.display = "inline-block";
    } else {
        document.getElementById("password").classList.remove("error");
        document.getElementById("password-icon").style.display = "none";
    }

    // Kiểm tra nếu không có thông báo lỗi nào xuất hiện, thực hiện chuyển hướng đến YouTube
    if (firstName !== "" && lastName !== "" && email !== "" && password !== "") {
        window.location.href = "https://www.youtube.com";
    } 

});
