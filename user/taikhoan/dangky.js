myApp.controller("dangKy", function($scope, $http) {

    $scope.duLieuTaiKhoan = {
        id: "",
        username: "",
        password: "",
        vaiTro: ""
    }

    $scope.formValidate = {
        trangThai: true,
        noiDung: ""
    }

    $scope.onClickDangKy = function() {

        $scope.formValidate.trangThai = true;
        $scope.formValidate.noiDung = "";
        var regexemail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        if($scope.duLieuTaiKhoan.username === "") {
            $scope.formValidate.trangThai = false;
            $scope.formValidate.noiDung = "Mời nhập vào Username";

            return;

        }
        if(!regexemail.test($scope.duLieuTaiKhoan.username)) {
            $scope.formValidate.trangThai = false;
            $scope.formValidate.noiDung = "Username phải là email";

            return;

        }
        if($scope.duLieuTaiKhoan.password === "") {
            $scope.formValidate.trangThai = false;
            $scope.formValidate.noiDung = "Mời nhập vào Password";

            return;

        }

        $http({
            method: "POST",
            url: "http://localhost:3000/tai-khoan",
            data: $scope.duLieuTaiKhoan
        }).then(function() {
            alert("Đăng ký thành công");
            window.location.href = "#!/taikhoan/dangnhap";
        })



    }///// Đóng onClickDangNhap




})////// Đóng controller