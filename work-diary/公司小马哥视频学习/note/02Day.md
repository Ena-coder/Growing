## 01-vue的组件通信

1. 父子组件通信
2. 兄弟组件通信

## 02-过滤器易错

1. 局部过滤器是filters 全局过滤器是Vue.filter(过滤器名字，方法，传参)

![image-20201101170106842](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201101170106842.png)

![image-20201101170012441](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201101170012441.png)

![image-20201101170449146](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201101170449146.png)

## 计算属性&watch

### computed的set和get

**computed是由set（）和get（）来实现的，使用时都是调用get方法，赋值时调用的是set方法**

![image-20201101182620209](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201101182620209.png)

**同上面代码实现效果一致**

![image-20201101183118857](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201101183118857.png)

### :bowing_woman: computed和method的区别: computed有缓存，不会像method那样重复渲染，提高性能

重复点同一首歌时，没有重新播放，即有缓存没有重新渲染

![image-20201101183406619](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201101183406619.png)

### watch侦听器 
1. 基本数据类型 —— 简单监听

2. 引用数据类型 —— 深度监听

![image-20201101175854284](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20201101175854284.png)





## 组件的生命周期

