myApp.controller("sanPhamDanhMuc", function($scope, $http, $routeParams) {

    $scope.danhSachSanPham = [];
    $scope.danhSachDanhMuc = [];
    
    $http({
        method: "GET",
        url: "http://localhost:3000/san-pham",
        params: {
            idDanhMuc: $routeParams.id
        }
    }).then(function(res) {
        $scope.danhSachSanPham = res.data;
    })

    $http({
        method: "GET",
        url: "http://localhost:3000/danh-muc"
    }).then(function(res) {
        $scope.danhSachDanhMuc = res.data;
    })

    $scope.onClickLocSanPham = function(iddm) {
        $http({
            method: "GET",
            url: "http://localhost:3000/san-pham",
            params: {
                idDanhMuc: iddm
            }
        }).then(function(res) {
            $scope.danhSachSanPham = res.data;
        })
    }


})////// Đóng Controller