## vue文件的dist目录的大致内容

> <img src="C:\Users\25836\AppData\Roaming\Typora\typora-user-images\image-20201028211222990.png" alt="image-20201028211222990" style="zoom: 67%;" />

## vue.js和vue.min.js的区别

> <img src="C:\Users\25836\AppData\Roaming\Typora\typora-user-images\image-20201028210942323.png" alt="image-20201028210942323" style="zoom: 67%;" />
>
> <img src="C:\Users\25836\AppData\Roaming\Typora\typora-user-images\image-20201028210946896.png" alt="image-20201028210946896" style="zoom:67%;" />

## mvc和mvvm的区别

> ![image-20201028220013186](C:\Users\25836\AppData\Roaming\Typora\typora-user-images\image-20201028220013186.png)

## 完整代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>01_vue的基本使用</title>
</head>
<body>
  <div id="app">
    <h1>{{msg}}</h1>
  </div>
  <!-- 第一步：引包 -->
  <script src="./node_modules/vue/dist/vue.min.js"></script>
  <!-- 第二步:创建实例化对象 -->
  <script>
    let data = { //既可以是对象也可以是函数
        msg: 'hello world' //數據改變,視圖改變,数据驱动视图
      }
    var vm = new Vue({
      el: '#app', //实例化对象与那个元素绑定
      data: data,
      template:`<span ref="div">{{msg}}</span>`, //template的优先级比el高,如果template有内容,则视图会渲染template的内容;否则渲染el的内容
      methods: {}
    });
    console.log(vm)
    console.log(vm.$el);
    console.log(vm.$el == document.getElementById('app')); //实质上时视图渲染内容和实际内容做对比 ,此时是false
    console.log(vm.$data);
    console.log(vm.$data == data);
    console.log(vm.$data);
    console.log(vm.$refs.div);
  </script>
</body>
</html>
```

