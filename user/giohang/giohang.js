myApp.controller("gioHang", function($scope, $http, $routeParams) {

    $scope.sanPhamGioHang = [];

    $http({
        method: "GET",
        url: "http://localhost:3000/gio-hang"
    }).then(function(res) {
        $scope.sanPhamGioHang = res.data;
    })        
    $scope.onClickLayId = function(idSP) {
        // $http({
        //     method: "GET",
        //     url: "http://localhost:3000/gio-hang/" + idSP
        // }).then(function(res) {
        //     $scope.sanPhamGioHang = res.data
        // })   
        
        $scope.onClickDelete = function() {
            
            $http({
                method: "DELETE",
                url: "http://localhost:3000/gio-hang/" + idSP
            }).then(function() {
                alert("Xóa thành công");
            })
        }  
        
        
    }







})///// Dong controller