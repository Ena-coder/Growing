 [博文链接](https://www.jianshu.com/p/39d431e9c5c1)

- apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；
- apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；
- apply 、 call 、bind 三者都可以利用后续参数传参； bind 是返回对应函数，便于稍后调用； apply 、call 则是立即调用 。

## call ( 上下文，参数1，参数2, ... ) 

## apply ( 上下文，[ 参数1，参数2, ... ] ) 

## bind ( 上下文，( 参数1，参数2, ... ) )

```js
function add(c,d){
	return this.a + this.b + c + d
}
var s = {a:1,b:2}
//call与apply的区别:第一个参数相同,后面的参数,call要逐一列举,apply放在数组中
add.call(s,3,4) //10  
add.apply(s,3,4) //Uncaught TypeError: CreateListFromArrayLike called on non-object 未捕获类型错误:CreateListFromArrayLike调用非对象
add.apply(s,[3,4]) //10

//bind 是返回对应函数
add.bind(s) //ƒ add(c,d){return this.a + this.b + c + d}

//bind可立即传参 也可调用返回的函数传参
var fun = add.bind(s)
fun(3,4) //10

var fun = add.bind(s,3,4)
fun() //10

//bind的传参机制和call一致
var fun = add.bind(s,[3,4])
fun() //"33,4undefined"
```

