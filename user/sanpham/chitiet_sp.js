myApp.controller("chiTietSanPham", function($scope, $http, $routeParams) {
    $scope.sanPhamChiTiet = {
        id: "",
        tenSanPham: "",
        anhSanPham: "",
        giaBan: "",
        giaGoc: "",
        soLuong: "",
        tenDanhMuc: "",
        moTa: "",
        idDanhMuc: ""
    }

    $http({
        method: "GET",
        url: "http://localhost:3000/san-pham/" + $routeParams.id
    }).then(function(res) {
        $scope.sanPhamChiTiet = res.data;
        $scope.sanPhamLienQuan = [];
        $http({
            method: "GET",
            url: "http://localhost:3000/san-pham",
            params: {
                idDanhMuc: $scope.sanPhamChiTiet.idDanhMuc
            }
        }).then(function(res) {
            $scope.sanPhamLienQuan = res.data;
        })
    })

    $scope.onClickThemGioHang = function() {
        console.log("Kiểm tra onclick");
        $http({
            method: "POST",
            url: "http://localhost:3000/gio-hang",
            data: $scope.sanPhamChiTiet
        }).then(function() {
            alert("Thêm vào giỏ hàng thành công");
            window.location.href = "#!/sanpham/chitiet/" + $routeParams.id;
        })
    }
    

    


})///// Đóng controller