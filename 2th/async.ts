// promiseMain1();


// console.log('안녕하세요');

// setTimeout(() => {
//   console.log('Set time out');
// }, 2000); // => 1초

// console.log('끝');

// const condition: boolean = false;

// const promise = new Promise((resolve, reject) => {
//   if (condition) {
//     resolve('success')
//   } else {
//     reject(new Error(' reject.. error :( '))
//   }
// });

// promise
//   .then((resolveData): void => {
//     console.log(resolveData);
//   })
//   .catch(error => console.log(error));

// const restaurant = (callback: () => void, time: number) => {
//   setTimeout(callback, time);
// }

// const order = (): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     restaurant(() => {
//       console.log('[레스토랑 진행 상황 - 음식 주문]');
//       resolve('음식 주문 시작');
//     }, 1000);
//   })
// }

// const cook = (progress: string): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     restaurant(() => {
//       console.log('[레스토랑 진행 상황 - 음식 조리중]');
//       resolve(`${progress} -> 음식 조리중`);
//     }, 2000);
//   });
// }

// const serving = (progress: string): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     restaurant(() => {
//       console.log('[레스토랑 진행 상황 - 음식 서빙중]');
//       resolve(`${progress} -> 음식 서빙중`);
//     }, 2500);
//   });
// }

// const eat = (progress: string): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     restaurant(() => {
//       console.log('[레스토랑 진행 상황 - 음식 먹는중]');
//       resolve(`${progress} -> 음식 먹는중`);
//     }, 3000);
//   });
// }

// order()
//   .then(progress => cook(progress))
//   .then(progress => serving(progress))
//   .then(progress => eat(progress))
//   .then(progress => console.log(progress))

// Promise.resolve(123)
//   .then(res => {
//     throw new Error('에러 발생');
//     return 456
//   })
//   .then(res => {
//     console.log(res); //@ 응 실행 안돼~
//     return Promise.resolve(789);
//   })
//   .catch(err => {
//     console.log(err.message);
//   })


let asyncFunc1 = (msg: string): Promise<string> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`asyncFunc1 - ${msg}`);
    }, 1000);
  });
}

let asyncFunc2 = (msg: string): Promise<string> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`asyncFunc2 - ${msg}`);
    }, 1500);
  });
}


// 함수명 - 인자 string Promise<string> 반환하기

// let promiseMain1 = (): void => {
//   asyncFunc1('servers').then((result: string) => {
//     console.log(result);
//     return asyncFunc2('스호앵');
//   }).then((result: string) => {
//     console.log(result);
//   });
// }

// promiseMain1();

const asyncMain = async () => {
  let result = await asyncFunc1('server part');
  console.log(result);
  result = await asyncFunc2('스호앵');
  console.log(result);
}

asyncMain();