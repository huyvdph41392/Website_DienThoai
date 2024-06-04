myApp.controller("thanhToan", function($scope, $http) {

    $scope.duLieuDonHang = {
        id: "",
        tenKhachHang: "",
        email: "",
        soDienThoai: "",
        diaChi: "",
        ngayDatHang: "",
        tenSanPham: "",
        anhSanPham: "",
        soLuong: "",
        tongTien: "",
        ghiChu: "",
        trangThaiDonHang: ""
    }

    $scope.formValidate = {
        trangThai: true,
        noiDung: ""
    }
    $scope.sanPhamGioHang = [];

    $http({
        method: "GET",
        url: "http://localhost:3000/gio-hang"
    }).then(function(res) {
        $scope.sanPhamGioHang = res.data
    })

    $scope.onClickThanhToan = function() {
        $scope.formValidate.trangThai = true;
        $scope.formValidate.noiDung = "";
        var regexemail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        if($scope.duLieuDonHang.tenKhachHang === "") {
            $scope.formValidate.trangThai = false;
            $scope.formValidate.noiDung = "Tên không được bỏ trống";

            return;
            
        }
        if($scope.duLieuDonHang.email === "") {
            $scope.formValidate.trangThai = false;
            $scope.formValidate.noiDung = "Email không được bỏ trống";

            return;

        }
        if(!regexemail.test($scope.duLieuDonHang.email)) {
            $scope.formValidate.trangThai = false;
            $scope.formValidate.noiDung = "Email không đúng định dạng";

            return;

        }
        if($scope.duLieuDonHang.soDienThoai === "") {
            $scope.formValidate.trangThai = false;
            $scope.formValidate.noiDung = "SĐT không được bỏ trống";

            return;

        }
        if($scope.duLieuDonHang.diaChi === "") {
            $scope.formValidate.trangThai = false;
            $scope.formValidate.noiDung = "Địa chỉ không được bỏ trống";

            return;

        }
        $http({
            method: "POST",
            url: "http://localhost:3000/don-hang",
            data: $scope.duLieuDonHang
        }).then(function() {
            alert("Thanh toán thành công");
        })

    }




})///// Dong controller