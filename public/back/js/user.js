/**
 * Created by Administrator on 2017/10/30.
 */
$(function () {
    var currentPage = 1;
    var pageSize = 8;
    function  render() {
        $.ajax({
            type: "get",
            url: "/user/queryUser",
            data: {
                page: currentPage,
                pageSize: pageSize
            },
            success: function (data) {
                console.log(data);
                var html = template("tpl", data);
                $("tbody").html(html);

                $("#paginator").bootstrapPaginator({
                    bootstrapMajorVersion: 3,//指定bootstrap的版本
                    currentPage: currentPage,//指定了当前是第几页
                    size: "small",
                    totalPages: Math.ceil(data.total / pageSize),
                    onPageClicked: function (event, originalEvent, type, page) {
                        //为按钮绑定点击事件 page:当前点击的按钮值
                        currentPage = page;
                        render();
                    }
                });
            }
        });
    }
    render();



}); 
