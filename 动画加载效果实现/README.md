# loading-animation-effect
The repository contains an implementation of the loading animation effect,which always happened when you are 
watching online videos or refreshing the web pages but the Data transmission speed is very slow at the moment.
  You can watch the demo.mp4 in the repository for a look of the result of animation effect,and for more details 
like how it works or the steps of the implementation,please go to the following link:

## 实现方法
由围成一个圈的一些小圆点，然后顺时针方向，逐个半径变小，再变大，也就是消失再出现的过程，每个点变小不是同时的，设置相同的时间差，就能形成加载中的视觉效果.
首先，在一个块中绘制4个小圆点，为了明显，先设置一下边框，后面删除即可

```html
<div class="circleBox">
    <p></p>
    <p></p>
    <p></p>
    <p></p>
</div>
```
然后让其固定在屏幕正中央，再分别将4个点放到边框4个角上，如图所示

```css

/*居中显示*/
.circleBox{
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -20px 0 0 -20px;
    width: 40px;
    height: 40px;
    /*border: 1px solid red;*/
}
/*4个点居于四个角*/
p:nth-of-type(1){
    position: absolute;
    left: 0;
    top: 0;
}

p:nth-of-type(2){
    position: absolute;
    right: 0;
    top: 0;
}
p:nth-of-type(3){
    position: absolute;
    right: 0;
    bottom: 0;
}
p:nth-of-type(4){
    position: absolute;
    left: 0;
    bottom: 0;
}
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190525193239302.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTIzOTg1,size_16,color_FFFFFF,t_70)
4个点看着太稀疏，我们上面整个框复制一遍，也放在屏幕正中央，不需要另外写太多CSS代码，然后将其旋转45度,实现下面的效果

```css
/*复制上面的4点环，再旋转45度*/
.circleBox:nth-of-type(2){
    transform: rotate(45deg);
}
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190525193301766.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MTIzOTg1,size_16,color_FFFFFF,t_70)
去除边框之后，效果如下
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190525193334112.png)

接下来，就是实现圆点相继变小的过程，我们给所有的圆点设置动画，使其依次慢慢消失

```css

@keyframes move{
    0%{
        transform:scale(0);
    }
    50%{
        transform:scale(1);
    }
    100%{
        transform:scale(0);
    }

}
```
设置时间差

```css

/*设置时间差*/
.circleBox:nth-of-type(1) p:nth-of-type(1){
    animation-delay:-0.1s;
}

.circleBox:nth-of-type(2) p:nth-of-type(4){
    animation-delay:-0.3s;
}

.circleBox:nth-of-type(1) p:nth-of-type(4){
    animation-delay:-0.5s;
}
.circleBox:nth-of-type(2) p:nth-of-type(3){
    animation-delay:-0.7s;
}

.circleBox:nth-of-type(1) p:nth-of-type(3){
    animation-delay:-0.9s;
}

.circleBox:nth-of-type(2) p:nth-of-type(2){
    animation-delay:-1.1s;
}

.circleBox:nth-of-type(1) p:nth-of-type(2){
    animation-delay:-1.3s;
}

.circleBox:nth-of-type(2) p:nth-of-type(1){
    animation-delay:-1.5s;
}

```
大概思路就是这样了


  
# 点击预览
http://zhangtsh5.github.io/Exercise/动态加载效果实现/index.html
