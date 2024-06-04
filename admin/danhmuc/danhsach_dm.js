myApp.controller('danhSachDanhMuc', function($scope, $http) {

    $scope.danhSachDanhMuc = [];

    $http({
        method: "GET",
        url: "http://localhost:3000/danh-muc"
    }).then(function(res) {
        $scope.danhSachDanhMuc = res.data;
    })

    $scope.onClickXoaDanhMuc = function(iddm) {
        $scope.danhMucXoa = [];
        
        $http({
            method: "GET",
            url: "http://localhost:3000/danh-muc/" + iddm
        }).then(function(res) {
            $scope.danhMucXoa = res.data;
            console.log($scope.danhMucXoa)
        })

        $scope.onClickXacNhanXoa = function(idDM) {
            idDM = iddm;
            $http({
                method: "DELETE",
                url: "http://localhost:3000/danh-muc/" + idDM
            }).then(function() {
                alert("Xóa thành công");
                window.location.href = "#!/danhmuc/danhsach";
            })
        }
    }


})///// Đóng controller