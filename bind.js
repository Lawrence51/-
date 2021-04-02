Function.prototype.myBind = function () {
  const thatFund = this; // 方法本身
  const thatArg = arguments[0]; // 被绑定对象
  if (typeof thatFund !== 'function') {
    throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
  }
  var args = Array.prototype.slice.call(arguments, 1); // 将生成函数时加入的参数代入其中
  // return function () {
  //   var funcArgs = args.concat(Array.prototype.slice.call(arguments)) // 将实际调用的方法传入的参数加入其中
  //   return thatFund.apply(thatArg, funcArgs)
  // }
  var fBound = function () {
    // this instanceof fBound ? this : thatArg 如果使用了new 的话，那指向的应该是new后的结果，所以指向 fBound，如果不是的话指向的是bind后的对象
    return thatFund.apply(this instanceof fBound ? this : thatArg, args.concat(Array.prototype.slice.call(arguments)))
  };
  fBound.prototype = thatFund.prototype;
  return fBound;
}