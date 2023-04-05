// 5일차
// 머쓱이보다 키 큰 사람
function solution(array, height) {
    let ms = array.filter((a) => a > height)
    return ms.length
}

//배열 두배 만들기
function solution(numbers) {
    var answer = numbers.map((a) => a * 2)
    return answer;
}

//삼각형의 완성조건 (1)
function solution(sides) {
    sides.sort((a, b)=> a - b) // 오름차순이 된다
    return sides[0] + sides[1] > sides[2] ? 1 : 2
}
console.log(solution([199, 72, 222]))

// 중앙값 구하기
function solution(array) {
    let arr = array.sort((a,b) => a - b)
    let answer = arr[Math.floor(arr.length / 2)]
    return answer
}
console.log(solution([9, -1, 0]))

// 짝수는 싫어요
function solution(n) {
    let arr = []
    for (i = 0; i <= n; i++) {
        if(i % 2 === 1){
            arr.push(i)
        }
    }
    return arr
}
console.log(solution(20))

// 