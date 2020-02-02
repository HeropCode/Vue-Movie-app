// 순서대로 동작하는 동기 방식
function a() {
  console.log('a')
}
function b() {
  console.log('b')
}

a()
b()
// a
// b


// 동기 방식에서 시간 지연에 따른 문제 발생
function a() {
  setTimeout(function () {
    console.log('a')
  }, 1000) // 1초
}
function b() {
  console.log('b')
}

a()
b()
// b
// a


// 콜백(Callback) 함수를 사용하여 해결
function a(cb) {
  setTimeout(function () {
    console.log('a')
    cb()
  }, 1000)
}
function b() {
  console.log('b')
}

a(function () {
  b()
})
// a
// b


// 콜백 함수는 콜백 지옥(Callback Hell)이 될 수 있음
function a(cb) {
  setTimeout(function () {
    console.log('a')
    cb()
  }, 1000)
}
function b(cb) {
  setTimeout(function () {
    console.log('b')
    cb()
  }, 1000)
}
// c함수 d함수 등...

a(function () {
  b(function () {
    c(function () {
      d(function () {
        // ...
      })
    })
  })
})


// 약속(Promise) 객체(생성자)를 사용
// Then을 사용
function a() {
  return new Promise(resolve => {
    setTimeout(function () {
      console.log('a')
      resolve()
    }, 1000)
  })
}
function b() {
  return new Promise(resolve => {
    setTimeout(function () {
      console.log('b')
      resolve()
    }, 1000)
  })
}
// c함수 d함수 등...

a()
  .then(() => b()) // return 필수! `.then(function () { return b() })`와 같음!
  .then(() => c())
  .then(() => d())
// ...


// Async/Await를 사용
function a() {
  new Promise(resolve => {
    setTimeout(function () {
      console.log('a')
      resolve()
    }, 1000)
  })
}
function b() {
  new Promise(resolve => {
    setTimeout(function () {
      console.log('b')
      resolve()
    }, 1000)
  })
}
// c함수 d함수 등...

async function asyncFunc() {
  await a()
  await b()
  await c()
  await d()
  // ...
}
asyncFunc()


// Then을 사용해서 Try/Catch/Finally
function a() {
  new Promise((resolve, reject) => {
    if (isError) {
      reject(ERROR_OBJECT)
    }
    setTimeout(function () {
      console.log('a')
      resolve(MY_DATA)
    }, 1000)
  })
}

a()
  .then(res => { console.log(res) }) // res is MY_DATA
  .catch(error => { console.log(error.message) }) // error is ERROR_OBJECT
  .finally(() => { console.log('Finally') })


// Async/Await를 사용해서 Try/Catch/Finally
function a() {
  new Promise((resolve, reject) => {
    if (isError) {
      reject(ERROR_OBJECT)
    }
    setTimeout(function () {
      console.log('a')
      resolve(MY_DATA)
    }, 1000)
  })
}

async function asyncFunc() {
  try {
    const res = await a()
    console.log(res) // res is MY_DATA
  } catch (error) { // error is ERROR_OBJECT
    console.log(error.message)
  } finally {
    console.log('Finally')
  }
}
asyncFunc()
