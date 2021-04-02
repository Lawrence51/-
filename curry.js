// 函数科里化

const curry = (func, ...arg1) => (...arg2) => (
  arg => arg1.length === func.length ? func(...arg) : curry(func, arg)
)([...arg1, ...arg2]);