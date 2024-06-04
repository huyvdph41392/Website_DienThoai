myApp.controller('themDanhMuc', function($scope, $http) {
    
    $scope.duLieuDanhMuc = {
        id: "",
        tenDanhMuc: ""
    }

    $scope.formValidate = {
        trangThai: true,
        noiDung: ""
    }

    $scope.onClickThemDanhMuc = function() {

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
            method: "POST",
            url: "http://localhost:3000/danh-muc",
            data: $scope.duLieuDanhMuc
        }).then(function() {
            alert("Thêm thành công");
            window.location.href = "#!/danhmuc/danhsach";
        })



    }///// Đóng onClickThemDanhMuc



})///// Đóng controller