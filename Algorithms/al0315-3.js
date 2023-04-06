// 4일차
// 중복된 숫자 개수
function solution(array, n) {
    return array.filter((a) => a === n).length
}
console.log(solution([0, 2, 3, 4], 1))

// 배열의 평균값
function solution(n) {
    let sum = n.reduce((a, b) => a + b) / n.length

return sum
}


// 짝수 홀수 개수
function solution(num_list) {
    let hol = 0
    let jjak = 0
    
    for(let a of num_list) {
        if (a % 2 === 0){
            jjak ++
        } else {
            hol ++
        }
    } 
    return [jjak, hol]
} 

// 배열 자르기
function solution(numbers, num1, num2) {
    return numbers.slice(num1, num2 + 1)
}

// 최댓값 만들기
function solution(numbers) {
    var answer = 0;
    return answer;
}

// 배열 원소의 길이
function solution(numbers) {
    const arr = numbers.map((a) => a.length)
    return arr
}
console.log(solution(["We", "are", "the", "world!"]))

// 배열 뒤집기
function solution(num_list) {
    return num_list.reverse()
}

// 최댓값 만들기(1)
function solution(numbers) {
    let arr = numbers.sort((a, b) =>b - a)
    return arr[0] * arr[1]
} 
console.log(solution([1, 2, 3, 4, 5]))
