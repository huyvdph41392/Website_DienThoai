myApp.controller('chiTietSanPham', function($scope, $http, $routeParams) {
    
    $scope.chiTietSanPham = {
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
        $scope.chiTietSanPham = res.data;
    })

    $scope.onClickXoaSanPham = function() {

        $http({
            method: "DELETE",
            url: "http://localhost:3000/san-pham/" + $routeParams.id 
        }).then(function() {
            alert("Xóa thành công");
            window.location.href = "#!/sanpham/danhsach";
        })    


    } ////// Đóng onClickXoaSanPham


})////// Đóng Controller