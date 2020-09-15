const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected';

function Promise(execute) {
  let self = this;
  self.state = PENDING;
  self.onFulfilledFn = [];
  self.onRejectedFn = [];

  function resolve(value) {
    setTimeout(function () {
      if (self.state === PENDING) {
        self.state = FULFILLED;
        self.value = value;
        self.onFulfilledFn.forEach(function (f) {
          f(self.value)
        })
      }
    })

  };

  function reject(reason) {
    setTimeout(() => {
      if (self.state === PENDING) {
        self.state = REJECTED;
        self.reason = reason;
        self.onRejectedFn.forEach(function (f) {
          f(self.reason)
        })
      }
    })

  }

  try {
    execute(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function (x) {
    return x;
  };
  onRejected = typeof onRejected === 'function' ? onRejected : function (x) {
    return x;
  };

  let self = this;
  let promise;
  switch (self.state) {
    case FULFILLED:
      promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
          try {
            var x = onFulfilled(self.value);
            resolvePromise(promise, x, resolve, reject);
          } catch (reason) {
            reject(reason);
          }
        })
      })
      break;
    case REJECTED:
      promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
          try {
            var x = onRejected(self.reason);
            resolvePromise(promise, x, resolve, reject);
          } catch (reason) {
            reject(reason);
          }
        })
      })
      break;
    case PENDING:
      promise = new Promise(function (resolve, reject) {
        self.onFulfilledFn.push(function () {
          try {
            var x = onFulfilled(self.value);
            resolvePromise(promise, x, resolve, reject);
          } catch (error) {
            reject(reason);
          }
        })
        self.onRejectedFn.push(function () {
          try {
            var x = onRejected(self.reason);
            resolvePromise(promise, x, resolve, reject)
          } catch (reason) {
            reject(reason)
          }
        })
      })
      break;
  }
  return promise;
};

function resolvePromise(promise, x, resolve, reject){
  if (promise === x) {
    return reject(new TypeError("x 不能与 promise 相等"));
  }
}

