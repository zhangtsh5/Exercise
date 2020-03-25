window,onload=function(){
    // 数据渲染到数组中
    let keyWords = JSON.parse(document.getElementById("J_keyWords").innerHTML);
    autoKw=document.getElementById("J_autoKw");
    t=null;
    let kwOrder = 0;
    let len=keyWords.length;
    searchInput=document.getElementById("J_btn");
// 获得焦点，停止轮播，关键字颜色变浅
    searchInput.addEventListener('focus',function(){
        clearInterval(t);
        autoKw.style.color="#ccc";
    },false);

// 输入文本时，搜索框中关键字消失
    searchInput.addEventListener('input',function(){
        // 关键字是否显示
        isShow(this.value);
    },false);

// 失去焦点，重新启动,颜色恢复
    searchInput.addEventListener('blur',function(){
        t=setInterval(autoKwChange,1000);
        autoKw.style.color="#6c6c6c";

    },false);

    function autoKwChange(){
        autoKw.innerHTML = keyWords[kwOrder];
        // if(kwOrder>=len-1){
        //     kwOrder=0;
        // }else{
        //     kwOrder++;
        // }
        kwOrder=kwOrder>=len-1 ? 0: kwOrder+1;
    }

    function isShow(val){
        // // value值为空，让关键字显示
        // if(val.length<=0){
        //     autoKw.style.display="block";
        // }
        // // value值不为空，说明有输入，让关键字消失
        // else{
        //     autoKw.style.display="none";
        // }
        autoKw.style.display=val.length<=0? 'block': 'none';
    }
    function setAutoKw(){
        t=setInterval(autoKwChange,1000);
    }
    setAutoKw();
}