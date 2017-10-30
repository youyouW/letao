/**
 * Created by Administrator on 2017/10/29.
 */
if(location.href.indexOf("login.html") <0 ){
$.ajax({
    type:"get",
    url:"/employee/checkRootLogin",
    success:function(data){
        if(data.error === 400){
            location.href = "login.html";
        }
    }
});
}
$(document).ajaxStart(function(){
    NProgress.start();
})

$(document).ajaxStop(function () {
    setTimeout(function () {
        NProgress.done();
    }, 500);
});
$(".child").prev().on("click",function(){
    $(this).next().slideToggle();

})
 $(".icon_menu").on("click", function () {
     $(".lt_aside").toggleClass("now");
     $(".lt_main").toggleClass("now");
     
 })
$(".icon_logout").on("click", function(){
    $("#logoutModal").modal("show");
});
$(".btn_logout").on("click",function () {
    $.ajax({
        type:"get",
        url:"/employee/employeeLogout",
        success:function (data) {
            if(data.success){
                window.location.href = "login.html";
            }
        }
    })
});