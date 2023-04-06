// 6일차
// 자릿수 더하기
function solution(n) {
    let str = n.toString()
    let arr = str.split('').map(Number)
    let sum = arr.reduce((a, b)=> (a + b))
    return sum
}

// 순서쌍의 개수
function solution(n) {
    let arr = 0
    for (i = 1; i <= n; i++) {
        if (n % i === 0) {
            arr++
        }
    } return arr
}

// 개미 군단
function solution(hp) {
    let general = Math.floor(hp / 5)
    let army = Math.floor((hp % 5) / 3)
    let work = Math.floor(((hp % 5) % 3 ) /1)

    return general + army + work
} 

// 숨어있는 숫자의 덧셈 (1)
function solution(my_string) {
    let arr = my_string.split('').filter(Number).map(Number)
    return arr.reduce((a, b) => (a) + (b))
}
console.log(solution("aAb1B2cC34oOp"))

// 문자열 정렬하기 (1)
function solution(my_string) {
    let arr = my_string.split('').filter((a) => !isNaN(a)).map(Number).sort((a, b)=> a - b)
    return arr
}
console.log(solution("abcde0"))

// 대문자와 소문자
function solution(my_string) {
    let arr = my_string.split('').map((a) => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase())
    return arr.join('');
}
console.log(solution("cccCCC"))

// 암호 해독
function solution(cipher, code) {
    
    let arr = cipher.split('')
    let arr2 = []
    for(let i = code; i <= arr.length; i ++) {
        if (i % code === 0) {
            arr2.push(arr[i - 1])
        }
    } return arr2.join('')
}
console.log(solution("dfjardstddetckdaccccdegk", 4)) // "attack"
