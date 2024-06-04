myApp.controller('suaSanPham', function($scope, $http, $routeParams) {
    
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

    $http({
        method: "GET",
        url: "http://localhost:3000/san-pham/" + $routeParams.id
    }).then(function(res) {
        $scope.duLieuSanPham = res.data;
    })

    $scope.formValidate = {
        trangThai: true,
        noiDung: ""
    }

    $scope.onClickSuaSanPham = function() {

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
            method: "PUT",
            url: "http://localhost:3000/san-pham/" + $routeParams.id,
            data: $scope.duLieuSanPham
        }).then(function() {
            alert("Sửa thành công");
            window.location.href = "#!/sanpham/danhsach";
        })



    } ////// Đóng onClickSuaSanPham



})////// Đóng Controller