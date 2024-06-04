myApp.controller('suaDonHang', function($scope, $http, $routeParams) {

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

    $scope.onClickSuaDonHang = function() {
        $http({
            method: "PUT",
            url: "http://localhost:3000/don-hang/" + $routeParams.id,
            data: $scope.duLieuDonHang
        }).then(function() {
            alert("Sửa trạng thái đơn hàng thành công!");
            window.location.href = "#!/donhang/danhsach";
        })
    }

})///// Đóng controller