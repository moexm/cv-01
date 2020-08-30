let html = document.querySelector("#html");
let style = document.querySelector("#style");
let str2=[];
let n=0;

let string=`/* hi,this's moe'cv
* 接下来我演示一下我的前端功底
* 首先我要准备一个div
**/

#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}

/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 **/

 #div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0.5);
    border:none;
 }

 /* 无极生太极
 *  一黑一白
 **/

#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/* 太极生两仪
/* 一为阴
**/

#div1::before {
    border:1px solid red;
    width:100px;
    height:100px;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background: #000;
    border:none;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}

/* 一为阳
**/

#div1::after {
    border:1px solid blue;
    width:100px;
    height:100px;
    left:50%;
    top:50%;
    border-radius:50%;
    transform:translateX(-50%);
    background: #fff;
    border:none;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}

`



function step(){

    setTimeout(()=>{
        str2+=(string[n]==='\n'?'<br>':string[n]);
        html.innerHTML=str2;
        style.innerHTML=string.substring(0,n);
        //滚动条
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if(n<string.length-1){
            n=n+1;
            step();
        }
    },0)
}

step();

