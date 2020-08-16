> :star:Vue路由跳转到新页面时 默认不是最顶部 的解决

```javaScript
// 其实原理很简单  就是在页面加载完毕后  把滚动条的距离设置为（0，0） 就解决了  
mounted () 
    this.$router.afterEach((to, from, next) => {
        window.scrollTo(0, 0)
    })
}
```