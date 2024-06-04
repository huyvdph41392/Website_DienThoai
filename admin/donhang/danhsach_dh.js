myApp.controller('danhSachDonHang', function($scope, $http) {

    $scope.danhSachDonHang = [];

    $http({
        method: "GET",
        url: "http://localhost:3000/don-hang"
    }).then(function(res) {
        $scope.danhSachDonHang = res.data;
    })



})///// Đóng controller