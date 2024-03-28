let users = JSON.parse(localStorage.getItem("accountList")) || [];
function signIn(e) {
    e.preventDefault();
    let inpEmail = document.getElementById("email").value;
    let inpPassword = document.getElementById("password").value;
    let check = false;
    let account = null;
    if (inpEmail == "") {
        alert("chưa điền email");
    } else if (inpPassword == "") {
        alert("chưa điền mật khẩu");
    } else {
        for (let i = 0; i < users.length; i++) {
            console.log(inpEmail, users[i].emailAddress);
            if (inpEmail == users[i].emailAddress) {
                account = users[i];
                check = true;
                break;
            }
        }
        console.log(account);
        if (check) {
            if (inpPassword == account.password) {
                alert("đăng kí thành công");  
                localStorage.setItem("checkLogin",account.id);
                window.location.href = "../index.html";
                // đăng nhập thành công                            
                // lưu checkLogin để xác định user đã đăng nhập
                // localStorage.setItem("users", JSON.stringify(users));
            }  else {
                alert("Dang nhap that bai");  
            }
        } else {
            alert("Dang nhap that bai")
        }
    }
}