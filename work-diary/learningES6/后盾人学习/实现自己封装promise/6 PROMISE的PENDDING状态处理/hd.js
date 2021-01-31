class HD { 
  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECTED = 'rejected';
  constructor(executor){ 
    this.status = HD.PENDING //默认状态
    this.value = null,
    this.callbacks = []
    try {
      executor(this.resolve.bind(this),this.reject.bind(this))
    } catch (error) {
      this.reject(error)
    }
  }
  resolve(value){
    if (this.status == HD.PENDING) {
      this.status = HD.FULFILLED
      this.value = value
      this.callbacks.map(callback =>{
        callback.onFulfilled(value)
      })
    }
  }
  reject(reason){
    if (this.status == HD.PENDING) {
      this.status = HD.REJECTED
      this.value = reason
      this.callbacks.map(callback =>{
        callback.onRejected(reason)
      })
    }
  }
  then(onFulfilled, onRejected){
    console.log(this); //状态一直处于pending不改变 status: "pending"
    if (this.status == HD.PENDING) {
      this.callbacks.push({
        onFulfilled,
        onRejected
      })
    }
    if (typeof onFulfilled !== 'function') {
      onFulfilled = () => {}
    }
    if (typeof onRejected !== 'function') {
      onRejected = () => {}
    }
    if (this.status == HD.FULFILLED) {
      setTimeout(() => { //使用setTimeout将HD放到任务队列中，下次执行
        try { //trycatch监听到解决回调函数下抛出异常就执行拒绝回调函数
          onFulfilled(this.value)
        } catch (error) {
          onRejected(error)
        }
      })
    }
    if (this.status == HD.REJECTED) {
      setTimeout(() => {
        try {
          onRejected(this.value)
        } catch (error) {
          onRejected(error)
        }
      })
    }
  }
}