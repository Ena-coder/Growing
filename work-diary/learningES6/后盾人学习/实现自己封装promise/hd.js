class HD { //使用类的方式构建
  // 固定的状态定义成静态属性
  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECTED = 'rejected';
  constructor(executor){ //构造器中传入执行者
    // 核心就是改变状态和值
    this.status = HD.PENDING //默认状态
    this.value = null
    try {
      executor(this.resolve.bind(this),this.reject.bind(this))
      // class 遵循严格模式，类方法的this不是当前的this,而是指向windows，通过bind()人为干预this的指向为当前的this
    } catch (error) {
      // 当报错就把错误抛给拒绝
      this.reject(error)
    }
  }
  // 2个类方法,目的是改变状态和值
  resolve(value){
    // console.log(this); //获取不到this Cannot set property 'status' of undefined
    // 如果当前状态是准备状态才可以改状态，达到promise状态只能修改一次的原则
    if (this.status == HD.PENDING) {
      this.status = HD.FULFILLED
      this.value = value
    }
  }
  reject(reason){
    // 如果当前状态是准备状态才可以改状态，达到promise状态只能修改一次的原则
    if (this.status == HD.PENDING) {
      this.status = HD.REJECTED
      this.value = reason
    }
  }
  then(onFulfilled, onRejected){
    if (typeof onFulfilled !== 'function') {
      onFulfilled = () => {}
    }
    if (typeof onRejected !== 'function') {
      onFulfilled = () => {}
    }
    // if (typeof onFulfilled !== 'function') {
    //   onFulfilled = () => {}
    // }
    onFulfilled(this.value)
    onRejected(this.value)
    // onRejected() 
  }
}
// let p = new Promise((resolve, reject) => {
//   resolve('成功')
// })
// console.log(p);


// 问题1. class 遵循严格模式，类方法的this不是类构造器的this,而是指向windows，在类构造器中通过bind(this)人为干预this的指向为类构造器的this
// 问题2. 先执行resolve,在执行reject,最后改变成reject的状态和值，意味着值改变了2次，违背了promise只改变一次的原则
// --->解决2：如果当前状态是准备状态才可以改状态
// 问题3. 当执行出错不能直接抛出错误，而应该是将状态改成拒绝
// class中 then的基础构建
// then方法中有传入成功和失败的回调方法
// 如果执行解决方法再来执行then中的回调方法能打印输出值，如果没有执行解决方法仍能执行then方法就过于异常
// 不传拒绝也行，别报错