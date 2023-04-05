//정수 n과 정수 배열 numlist가 매개변수로 주어질 때,
//numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(n, numlist) {
    let arr = []
    for (let i = 0; i <= Math.max(...numlist); i++) {
        arr.push(n * i)
    } return numlist.filter((a) => arr.includes(a))

}
console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12])) // [6, 9, 12]


//정수 배열 numbers가 매개변수로 주어집니다. 
//numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
    let arr = numbers.sort((a, b) => a - b)
    if(arr[0] * arr[1] > arr[arr.length-2] * arr[arr.length -1]){
        return arr[0] * arr[1]
    } else {    
        return arr[arr.length-2] * arr[arr.length -1]
    }
}


// "*"의 높이와 너비를 1이라고 했을 때, 
// "*"을 이용해 직각 이등변 삼각형을 그리려고합니다. 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.

function solution(n) {
    let result = ''

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            result = result + '*'
        }
        result = result + '\n'
    } 
    return result
}
console.log(solution(3))






const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for(let i = 1; i <= +input[0]; i += 1) {
        console.log('*'.repeat(i));
    }
});