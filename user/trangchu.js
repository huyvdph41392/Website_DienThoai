myApp.controller("trangChu", function($scope, $http) {

    $scope.danhSachSanPham = [];
    $scope.danhSachDanhMuc = [];

    $http({
        method: "GET",
        url: "http://localhost:3000/san-pham"
    }).then(function(res) {
        $scope.danhSachSanPham = res.data;
    })




})///// Đóng controller