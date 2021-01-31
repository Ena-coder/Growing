class HD {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'
  constructor(executor){
    this.value = null
    this.status = HD.PENDING //默认为准备状态
    // executor(this.resolve, this.rejected) //解决resolve is not a function
    executor(this.resolve.bind(this), this.rejected.bind(this)) //人为干预this的指向，解决Cannot set property 'status' of undefined
  }
  resolve(value){
    this.status = HD.FULFILLED
    this.value = value
  }
  rejected(value){
    this.status = HD.REJECTED
    this.value = value
  }
}