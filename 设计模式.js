let Ve = function (subType, superType){
    // 判断抽象工厂中是否有该抽象类
    if (typeof Ve[superType] === 'function') {
        // 缓存类
        function F(){};
        // 集成父类属性和方法
        F.prototype = new Ve[superType]();
        // 子类原型集成 "父类"
        subType.prototype = new F();
    } else {
        // 不存在该抽象类抛出错误
        throw new Error('未创建该抽象类');
    }
}

// 小汽车抽象类
Ve.Car = function(){
    this.type = 'car';
};
Ve.Car.prototype = {
    getPrice:function(){
        return new Error('抽象方法不能调用')
    },
    getSpeed:function(){
        return new Error('抽象方法不能调用');
    }
}