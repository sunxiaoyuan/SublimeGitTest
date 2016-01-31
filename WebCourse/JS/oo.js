// 这个是A的类声明
// 这个也相当于A的构造方法，在实例化对象的时候，都会调用到这个方法
function A(){

	document.write("this is A construct method<br>");
	// 通过函数闭包，动态添加属性
	// this代表当前类的实例，当实例化对象的时候，都会调用到这个方法
	 this.sayWow = function(){
	 	document.write("Wow JS<br>");
	 }
}

// 实例方法
// 通过对A的原型链添加新的属性实现
A.prototype.sayHello = function(){
	document.write("Hello JS<br>");
}

// 静态方法（类似于OC中的类方法）
A.sayHi = function(){
	document.write("Hi JS<br>");
}

// var a = new A();
// a.sayHello();
// A.sayHi();


// 继承是通过对父类原型链的复制实现的
function B(){

}

B.prototype = new A();

var b = new B();
b.sayHello();
b.sayWow();









