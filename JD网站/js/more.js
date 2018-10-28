function fix (str)
{
    var box = document.getElementById('box');
    box.style.left = str;
}

var news = document.getElementsByName('news');
console.log(news);

for(var i = 0; i < news.length; i++)
{   
    var ts = document.getElementsByName('newsbtext');
    switch(i)
    {
        case 0:
            news[i].onclick = function ()
            {
                for(var i = 0; i < ts.length; i++)
                {
                    if(i == 0)
                    {
                        ts[i].innerHTML = "智能生活开启新时代！";
                    }
                    else if(i == 1)
                    {
                        ts[i].innerHTML = "超值预售1元最高抵1111";
                    }
                    else if(i == 2)
                    {
                        ts[i].innerHTML = "你的家，智能了吗？";
                    }
                    else
                    {
                        ts[i].innerHTML = "家电盛典，价保11";
                    }
                }
            }
            break;
        case 1:
            news[i].onclick = function ()
            {
                for(var i = 0; i < ts.length; i++)
                {
                    if(i == 0)
                    {
                        ts[i].innerHTML = "京东图书勋章体系改版公告";
                    }
                    else if(i == 1)
                    {
                        ts[i].innerHTML = "京东PLUS会员权益更新及会费调整";
                    }
                    else if(i == 2)
                    {
                        ts[i].innerHTML = "京东启用全新客服电话“950618”";
                    }
                    else
                    {
                        ts[i].innerHTML = "关于召回普利司通（天津）轮胎有限公司2个规格乘用车轮胎的公告";
                    }
                }
            }
            break;
        case 2:
            news[i].onclick = function ()
            {
                for(var i = 0; i < ts.length; i++)
                {
                    if(i == 0)
                    {
                        ts[i].innerHTML = "瑞士钟表品牌宝齐莱独家入驻京东";
                    }
                    else if(i == 1)
                    {
                        ts[i].innerHTML = "京东PLUS会员权益更新及会费调整";
                    }
                    else if(i == 2)
                    {
                        ts[i].innerHTML = "华北区张家口大件运营中心开仓公告";
                    }
                    else
                    {
                        ts[i].innerHTML = "永和备件库搬仓影响售后处理时效公告";
                    }
                }
            }
            break;
        default: break;
    }
}