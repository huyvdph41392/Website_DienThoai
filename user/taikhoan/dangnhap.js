myApp.controller("dangNhap", function($scope, $http) {
    var url = 'http://localhost:3000/tai-khoan';
    var username = document.querySelector('.username');
    var password = document.querySelector('.password');

    $scope.formValidate = {
        trangThai: true,
        noiDung: ""
    }

    $scope.onClickDangNhap = function() {

        $scope.formValidate.trangThai = true;
        $scope.formValidate.noiDung = "";

        if(username.value === "") {
            $scope.formValidate.trangThai = false;
            $scope.formValidate.noiDung = "Mời nhập vào Username";

            return;

        }
        if(password.value === "") {
            $scope.formValidate.trangThai = false;
            $scope.formValidate.noiDung = "Mời nhập vào Password";

            return;

        }

        fetch(`${url}`).then(res => res.json()).then(data => {
            if(checkLogin(data, username.value, password.value)){
                alert("Đăng nhập thành công");
                window.location.href = "/admin/index.html";
            }else{
                $scope.formValidate.trangThai = true;
                $scope.formValidate.noiDung = "Sai tài khoản hoặc mật khẩu";
            }
        }).catch(err => console.log(err))

        // $http({
        //     method: "GET",
        //     url: "http://localhost:3000/tai-khoan"
        // }).then(function(res) {
        //     $scope.duLieuTaiKhoan = res.data;
        //     console.log(duLieuTaiKhoan.username);
        // })



    }///// Đóng onClickDangNhap

    const checkLogin = (data, username, password) => {
        return data.some(data => {
            return data.username == username && data.password == password;
        })
    }

})///// Đóng controller