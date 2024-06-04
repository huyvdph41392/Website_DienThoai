myApp.controller('chiTietDonHang', function($scope, $http, $routeParams) {

    $scope.duLieuDonHang = {
        id: "",
        tenKhachHang: "",
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

    $http({
        method: "GET",
        url: "http://localhost:3000/don-hang/" + $routeParams.id
    }).then(function(res) {
        $scope.duLieuDonHang = res.data;
    })



})///// Đóng controller