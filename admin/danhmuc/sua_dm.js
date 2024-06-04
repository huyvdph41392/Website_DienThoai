myApp.controller('suaDanhMuc', function($scope, $http, $routeParams) {
    
    $scope.duLieuDanhMuc = {
        id: "",
        tenDanhMuc: ""
    }

    $http({
        method: "GET",
        url: "http://localhost:3000/danh-muc/" + $routeParams.id
    }).then(function(res) {
        console.log($scope.duLieuDanhMuc);
        $scope.duLieuDanhMuc = res.data;
    })

    $scope.formValidate = {
        trangThai: true,
        noiDung: ""
    }

    $scope.onClickSuaDanhMuc = function() {

        $scope.formValidate.trangThai = true;
        $scope.formValidate.noiDung = "";

        if($scope.duLieuDanhMuc.id === "") {
            $scope.formValidate.trangThai = false;
            $scope.formValidate.noiDung = "Mời nhập ID";    
            
            return;
        }
        if($scope.duLieuDanhMuc.tenDanhMuc === "") {
            $scope.formValidate.trangThai = false;
            $scope.formValidate.noiDung = "Mời nhập Tên danh mục";    
            
            return;
        }

        $http({
            method: "PUT",
            url: "http://localhost:3000/danh-muc/" + $routeParams.id,
            data: $scope.duLieuDanhMuc
        }).then(function() {
            alert("Sửa thành công");
            window.location.href = "#!/danhmuc/danhsach";
        })



    }///// Đóng onClickThemDanhMuc



})///// Đóng controller