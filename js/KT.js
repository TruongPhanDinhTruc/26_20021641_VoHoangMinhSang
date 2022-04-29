$(document).ready(function(){
    var i = 1;
    $("#DangKy").click(function () {
        $("#myModal").modal();
    });

    function kiemTraTen() {
        var i = 1;
        let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#hoten").val()=="") {
            $("#tbTen").html("Bắt buộc nhập");
            return false;
        }
        if (!mauKT.test($("#hoten").val())) {
            $("#tbTen").html("Viết hoa ký tự đầu, không chứa ký tự số");
            return true;
        }
        $("#tbTen").html("*");
        return true;
    }
    $("#hoten").blur(kiemTraTen);

    function kiemTraSoAo() {
        var mauKT = / ^\d*$/;
        if ($("#soao").val()=="") {
            $("#tbsoao").html("Bắt buộc nhập");
            return false;
        }
        if (!mauKT.test($("#soao").val())) {
            $("#tbsoao").html("Chỉ được nhập 1 chữ số");
            return true;
        }
            $("#tbsoao").html("*");
            return true;                 
    }
    $("#soao").blur(kiemTraSoAo);

    function kiemTraCauLacBo() {
        var mauKT = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        if ($("#clb").val()=="") {
            $("#tbclb").html("Bắt buộc nhập");
            return false;
        }
        if (!mauKT.test($("#clb").val())) {
            $("#tbclb").html("Mỗi ký tự đầu viết hoa");
            return true;
        }
        $("#tbclb").html("*");
        return true;
        
    }
    $("#clb").blur(kiemTraCauLacBo);

    function kiemTraNTT() {              
        if ($("#ntt").val()=="") {
            $("#tbntt").html("Bắt buộc nhập");
            return false;
        }
        var today = new Date();
        var ntt = new Date($("#ntt").val());
        today = today.setDate(today.getDate() + 15);
        if (today > ntt) {
$("#tbntt").html("Ngày tập trung phải sau ngày hiện tại 15 ngày");
            return false;
        }
        $("#tbntt").html("*");
        return true;
    }
    $("#ntt").blur(kiemTraNTT);

    function kiemTraSDT() {
        var mauKT = /^09\d{2}-\d{3}-\d{3}$/;
        if ($("#sdt").val()=="") {
            $("#tbsdt").html("Bắt buộc nhập");
            return false;
        }
        if (!mauKT.test($("#sdtT").val())) {
            $("#tbsdt").html("Theo dạng 09xx-xxx-xxx");
            return true;
        }
        $("#tbsdt").html("*");
        return true;
    }
    $("#sdt").blur(kiemTraSDT);
})