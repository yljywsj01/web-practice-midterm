window.onload=function(){
    //document.write("HelloJavaScript");
};

$(function(){
    $("input").on("click",function(){
        //跳出視窗
        //alert("Hi");

        //改變問號 跳出選項
        //$("h1").text("li:first");
        //$("h1").text("li:last");
        //$("h1").text($("li").eq(1).text());

        //亂數
        var numberOfListItem=$("li").length;
        var randomChildNumber=Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());

        //延伸LAB:加上顯示特定圖片
    });
});
