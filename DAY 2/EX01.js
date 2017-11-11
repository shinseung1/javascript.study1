 // 1 . new Object();

 var obj = new Object();
console.log(typeof obj);

console.log(obj.constructor === Object);
obj.name = 'aaa';
obj.age = '123';
console.log(obj);

// string bool number 예외적으로
 var a = new Object('str');
 console.log(a);


 console.log("===========");
 //위방법 절대안씀

 // 2번쨰 리터럴 방식 var a = S; var a = S : 가장 많이쓴다.
 var obj2 = {
     name : 'aaa',
     age : '123'
 };
 console.log(typeof obj);
 console.log(obj.constructor === Object);
 console.log(obj2);

 //어떨때 쓰느냐
 //  1. namespace 모듈화화
 //  2.option 값

 console.log("======================================");

 // 3번쨰 생성자 함수 new
 // 붕어빵 / 붕어빵틀(생성자 함수) 하나를 잘 만들어 놓으면  => 붕어빵

 var Person = function (name) { // 지금의 name 의미 x
     this.name = name; //person 나 자신

 };
 // 생성자 함수는 new 로 시작
 var p1 = new Person("철수");
 var p2 = new Person("민수");
 var p3 = new Person("영희");

 console.log(p1.name);
 console.log(p2.name);
 console.log(p3.name);

console.log("========================================");

//객체의 추가 삭제 탐색 갱신
 var obj3 = {};
 obj3.name = 'asd'; // 추가
 obj3.name = '123'; // 갱신
 //객체는 없는 값은 추가를 하고 있는 값은 갱신을 합니다.
 obj3.age = 2000;

 console.log("age를 삭제");
 delete obj3.age;
 console.log(obj3);

 obj3.age = 3000;
 obj3.temp = 'empty';
 obj3["age"] = 3000;

 var key;
 for(key in obj3){

     console.log("key: " + key + "value :" + obj3[key]);
 }




 for(key in obj3) {
     if (obj3.hasOwnProperty(key)) {
         console.log("key: " + key + "value :" + obj3[key]);
     }
 }

 //생성자 함수는 new

 var p5 = Person('바보');
 console.log(p5);

 //아무것도 안만들어짐

 // new를 강제
 var Person = function (name) {
     if(!(this instanceof  Person)) { // 에러처리는 위에서 간단하게
         return new Person(name);{
     }
         this.name = name;

     }

 };

var p6 = new Person("dsadasdasd");
console.log(p6);