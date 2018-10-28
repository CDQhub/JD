// 刷新时间一次
function getcurrenttime() 
{
    var date = new Date();
    var dl = date.toLocaleString();
    var timediv = document.getElementById('timediv');
    timediv.innerHTML = dl;
}

// 一秒刷新一次
setInterval('getcurrenttime();','1000');  

// 返回
var back = document.getElementById('back');
back.onclick = function ()
{
    window.history.back();
    return false;
}