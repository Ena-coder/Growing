

- [Module build failed: TypeError: loaderContext.getResolve is not a function](https://blog.csdn.net/shujiaw/article/details/105863069)
- [vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config](https://blog.csdn.net/cominglately/article/details/80555210)



## Using browsers option can cause errors. Browserslist config can be used for Babel, Autoprefixer, postcss-normalize and other tools.

> 使用浏览器选项可能会导致错误。Browserslist配置可以用于Babel、Autoprefixer、postcss-normalize和其他工具。

![image-20200821154855556](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20200821154855556.png)

:star:解决方案：[Replace Autoprefixer browsers option to Browserslist config. Use browserslist key in package.js](https://www.jianshu.com/p/11b86b45ba91)![image-20200821155650985](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20200821155650985.png)

## ERROR in Encountered an error while minifying static/js/vendor26d7e9ed1eec635222ab.js:Maximum call stack size exceeded

> 在缩小static/js/vendor26d7e9ed1eec635222ab.js时遇到错误:超过最大调用堆栈大小

![image-20200821155740846](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20200821155740846.png)

:star:解决方案：[使用UglifyJsPlugin 导致打包报错原因](https://blog.csdn.net/qq_41653151/article/details/106571374?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.add_param_isCf&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.add_param_isCf)![image-20200821160043792](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20200821160043792.png)

![image-20200821160139066](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20200821160139066.png)

最终打包成功！

![image-20200821160208971](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20200821160208971.png)

当然最直接的方法就是：不使用压缩打包![image-20200821161557802](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20200821161557802.png)