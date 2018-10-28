var tops = document.getElementsByName('images');
console.log(tops);


// 下面红点部分
var prev = tops[0]; // 上个红点
for (var i = 0; i < tops.length; i++) {
    tops[i].onclick = function () {
        prev.className = "";
        this.className = "current";
        prev = this;
        var index = 0;
        var topss = document.getElementsByName('images');
        for(var j = 0; j < tops.length; j++)
        {
            if(this == topss[j])
            {
                index = j;
                break;
            }
        }
        switch (j) {
            case 0:
                change("top.jpg")
                break;
            case 1:
                change("image2.jpg")
                break;
            case 2:
                change("image3.jpg")
                break;
            case 3:
                change("image4.jpg")
                break;
            case 4:
                change("image5.jpg")
                break;
            case 5:
                change("image6.jpg")
                break;
            case 6:
                change("image7.jpg")
                break;
            case 7:
                change("image8.jpg")
                break;
            case 8:
                change("image1.jpg")
                break;
            default: break;
        }
    }
}

function change(path) {
    var im = document.getElementById('tupian');
    im.src = "images/" + path;
}

// 左右箭头部分
var arrowl = document.getElementsByClassName('arrow-l');
arrowl[0].onclick = function()
{
    var cur = document.getElementsByClassName('current');
    cur[0].previousElementSibling.onclick();
}
var arrowr = document.getElementsByClassName('arrow-r');
arrowr[0].onclick = function()
{
    var cur = document.getElementsByClassName('current');
    cur[0].nextElementSibling.onclick();
}