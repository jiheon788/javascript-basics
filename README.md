#  자바스크립트 개념 정리
### AI Hub 인공지능 웹개발 트랙 2022.07 ~ 2022.08

* Callback Function: 파라미터로 함수를 전달받아, 함수의 내부에서 실행하는 함수, 다른 함수에 매개변수로 넘겨준 함수
  - 익명의 함수 사용, 내부에서 실행되기 때문에 이름 필요없음
* Closure: 함수와 함수가 사용하는 변수들을 저장한 공간을
* Node.js: 브라우저 외의 환경에서 자바스크립트 코드를 실행하도록 하는 프로그램
* Lexical Environment: 함수가 사용하는 변수들을 둘러싼 환경
* Hoisting: 변수가 선언된 시점보다 앞에서 사용되는 현상
---
### 함수
```js
// 함수선언문
    function sayHello() {
      console.log("hi");
    }

    // 함수표현식
    let sayHello = function () {
      console.log('Hello');
    }

    let add = function (n1, n2) {
      return n1 + n2;
    }
    // 화살표 함수
    let add2 = (n1, n2) => {
      return n1 + n2;
    }

    // 리턴문은 소괄호로 대체 가능 - 한줄!
    let add3 = (n1, n2) => (n1 + n2);
    // 리턴문이 한줄이면 괄호도 생략가능
    let add4 = (n1, n2) => n1 + n2;

    //인수가 하나면은 괄호 생략가능
    let sayHello = name => `Hello,${name}`;

    //인수가 없으면 괄호생략 불가능
    let showError()=>{alert('error!')}
```
### 객체
* 키 : 값
```js
const superman = {
  name : 'clark',
  age : 30
}
//접근
console.log(superman.name);
console.log(superman.['name']);

//추가
superman.gender = 'male';

// 삭제
delete superman.gender;
```
### 객체 단축 프로퍼티
```js
const name = 'clark';
const age = 33;

const superman = {
  name,
  age
}
```
### 생성자
```js
// 객체 리터럴
let user = {
  name:'Mike',
  age:30,
}

// 생성자 함수
function User(name, age){
  this.name = name;
  this.age = age;
}

let user1 = new User('Mike', 30);
let user2 = new User('Jane', 22);

```

---
### 동기적 제어흐름
* 자바스크립트는 싱글스레드, 한줄씩 실행
* 싱글스레드환경에서는 메인스레드를 긴 시간 점유하면 프로그램 멈춤
### 비동기적 제어흐름
* 현재실행중인 코드가 종료되기 전에 다음 라인 코드 실행
* 비동기 작업 기다리는 동안 메인스레드는 다음 작업 처리
* 자바스크립트 엔진은 비동기 처리 제공x, 정해진 함수를 이용하여 가능(API)
> e.g. setTimeout, XMLHttpRequest, fetch
* 비동기코드를 처리하는 모듈은 엔진 외부에 존재

### Promise
* 비동기 API 중 하나
* 비동기 처리에 사용되는 객체
> new Promise()
* 메서드 호출하여 대기, 콜백함수 선언 가능 인자는 resolve, reject
* 현재 당장 얻을 수는 없지만 가까운 미래에는 얻을 수 있는 어떤 데이터에 접근하기 위한 방법 제공
```js
// findUserAndCallBack(1, function (user) {
//   console.log("user:", user); // 콜백함수
// });

// function findUserAndCallBack(id, cb) {
//   setTimeout(function () {
//     console.log("waited 0.1 sec.");
//     const user = {
//       id: id,
//       name: "User" + id,
//       email: id + "@test.com",
//     };
//     cb(user);
//   }, 100);
// }

findUser(1).then(function(user){
  console.log("user: ", user);
});

function findUser(id){
  return new Promise(function(resolve){
    setTimeout(function(){
      console.log("waited 0.1 sec.");
      const user = {
        id: id,
        name: "User" + id,
        email: id + "@test.com",
      };
      resolve(user);
    }, 100);
  });
}
```
* 위 코드는 콜백함수를 인자로 넘기는 대신에 promise 객체를 생성하여 리턴하였고, 호출부에서 리턴받은 프로미스 객체에 then()메서드를 호출하여 결과값을 가지고 실행할 로직을 넘겨줌
* 콜백함수를 통한 비동기 처리와의 차이점은 함수를 호출하면 프로미스타입의 결과값이 리턴되고, 이 결과값을 가지고 다음에 수행할 작업을 진행한다는 것.


```js
function getData() {
  return new Promise(function(resolve, reject) {
    $.get('url 주소/products/1', function(response) {
      if (response) {
        resolve(response); // 이행(완료)상태
      }
      reject(new Error("Request is failed")); // 실패상태
    });
  });
}

// 위 $.get() 호출 결과에 따라 'response' 또는 'Error' 출력
getData().then(function(data) {
  console.log(data); // response 값 출력
}).catch(function(err) { // 실패의 처리 결과값
  console.error(err); // Error 출력
});
``` 
### Promise Chaining
* 여러 개의 프로미스를 연결하여 사용

```js
new Promise(function(resolve, reject){
  setTimeout(function() {
    resolve(1);
  }, 2000);
})
.then(function(result) {
  console.log(result); // 1
  return result + 10;
})
.then(function(result) {
  console.log(result); // 11
  return result + 20;
})
.then(function(result) {
  console.log(result); // 31
});
```
### 프로미스 연결 적용
```js
getData(userInfo)
  .then(parseValue)
  .then(auth)
  .then(diaplay);

var userInfo = {
  id: jiheon788@ajou.ac.kr,
  pw: '****'
};

function parseValue(){
  return new Promise({...})
}
function auth(){
  return new Promise({...})
}
function display(){
  return new Promise({...})
}

```

* 페이지에 입력된 정보를 받아와 파싱, 인증 등 작업을 거치는 코드
* 여러 개의 프로미스를 .then()으로 연결하여 처리

### 프로미스 에러 처리 방법
1. then()의 두 번째 인자로 에러 처리
```js
getData().then(
  handleSuccess,
  handleError
);
```
2. catch()를 이용
```js
getData().then().catch();
```
* 위 2가지 방법은 프로미스의 reject메서드가 호출되어 실패 상태가 된 경우
* 프로미스의 로직이 정상적 작동x
```js
function getData() {
  return new Promise(function(resolve, reject) {
    reject('failed');
  });
}

// 1. then()의 두 번째 인자로 에러를 처리하는 코드
getData().then(function() {
  // ...
}, function(err) {
  console.log(err);
});

// 2. catch()로 에러를 처리하는 코드
getData().then().catch(function(err) {
  console.log(err);
});
```




### async / await
* 프로미스를 활용한 비동기 코드를 간결하게 작성하는 문법
* await 키워드는 반드시 async 함수 안에서만 사용
* async로 선언된 함수는 반드시 프로미스를 리턴
* function 키워드 앞에 async를 붙여 만든다.
* 비동기 코드에 쉽게 순서를 부여한다.

```js
async function aysncFunc(){
  let data1 = await fetchData1()
  let data2 = await fetchData2(data1)
  let data3 = await fetchData3(data2)
  return data3
}

function promiseFunc(){
  return fetchData1()
  .then(fetchData2)
  .then(fetchData3)
}
```
## NVM
* Node Version Manager
> nvm ls 설치된 버전 확인

> nvm install 14.17.3 

> nvm use 14.17.3 (cmd 관리자 권한 실행 - 윈도우+r > cmd 입력 > ctrl + shift + enter)

## NPM
* Node Package Manager
* Node.js 프로젝트 관리하는 도구
> npm install --save * (== yarn add *)

> npm init 프로젝트 디렉터리 생성

> npm install [package-name] --global

### CSR
* Client Side Rendering

### SSR
* Server Side Rendering