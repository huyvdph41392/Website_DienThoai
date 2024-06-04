myApp.controller('danhSachSanPham', function($scope, $http) {

    $scope.danhSachSanPham = [];

    $http({
        method: "GET",
        url: "http://localhost:3000/san-pham"
    }).then(function(res) {
        $scope.danhSachSanPham = res.data;
    })

    $scope.onClickXoaSanPham = function(idsp) {

        $scope.id = idsp;

        $scope.onClickXacNhanXoa = function(idSP) {

            idSP = idsp;

            $http({
                method: "DELETE",
                url: "http://localhost:3000/san-pham/" + idsp 
            }).then(function() {
                alert("Xóa thành công");
                window.location.href = "#!/sanpham/danhsach";
            })    
            
            
        }////// Đóng onClickXacNhanXoa



    } ////// Đóng onClickXoaSanPham



})////// Đóng Controller