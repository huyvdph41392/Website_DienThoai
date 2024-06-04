myApp.controller('themSanPham', function($scope, $http) {
    
    $scope.duLieuSanPham = {
        id: "",
        tenSanPham: "",
        anhSanPham: "",
        giaBan: "",
        giaGoc: "",
        soLuong: "",
        tenDanhMuc: "",
        moTa: ""
    }

    $scope.formValidate = {
        trangThai: true,
        noiDung: ""
    }
    
    $scope.onClickThemSanPham = function() {
        $scope.formValidate.trangThai = true;
        $scope.formValidate.noiDung = "";
        if($scope.duLieuSanPham.id === "") {
            $scope.formValidate.trangThai = false;
            $scope.formValidate.noiDung = "Mời nhập ID";

            return;
        }
        if($scope.duLieuSanPham.tenSanPham === "") {
            $scope.formValidate.trangThai = false;
            $scope.formValidate.noiDung = "Mời nhập Tên";

            return;
        }
        if($scope.duLieuSanPham.anhSanPham === "") {
            $scope.formValidate.trangThai = false;
            $scope.formValidate.noiDung = "Mời nhập Ảnh";

            return;
        }
        if($scope.duLieuSanPham.giaBan === "") {
            $scope.formValidate.trangThai = false;
            $scope.formValidate.noiDung = "Mời nhập giá bán";

            return;
        }
        if($scope.duLieuSanPham.giaGoc === "") {
            $scope.formValidate.trangThai = false;
            $scope.formValidate.noiDung = "Mời nhập giá gốc";

            return;
        }
        if($scope.duLieuSanPham.tenDanhMuc === "") {
            $scope.formValidate.trangThai = false;
            $scope.formValidate.noiDung = "Mời nhập danh mục";

            return;
        }
        if($scope.duLieuSanPham.moTa === "") {
            $scope.formValidate.trangThai = false;
            $scope.formValidate.noiDung = "Mời nhập mô tả";

            return;
        }

        $http({
            method: "POST",
            url: "http://localhost:3000/san-pham",
            data: $scope.duLieuSanPham
        }).then(function() {
            alert("Tạo mới thành công");
            window.location.href = "#!/sanpham/danhsach";
        })


    } ////// Đóng onClickThemSanPham



}) ////// Đóng controller