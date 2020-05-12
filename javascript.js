window.onscroll = function(){function12()}
function function12(){
    var scrollToppage = document.body.scrollTop || document.documentElement.scrollTop;
    var heightpage = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var srolled = (scrollToppage / heightpage) * 100;

    document.getElementById('bar').style.width  =   srolled + "%"
}