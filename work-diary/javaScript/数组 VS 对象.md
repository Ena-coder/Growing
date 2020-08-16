> :star: 判断数组还是对象的方法

```javaScript
console.log(Object.prototype.toString.call({}))//[object Object]
console.log(Object.prototype.toString.call([]))//[object Array]
```