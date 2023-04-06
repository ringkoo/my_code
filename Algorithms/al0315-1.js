// 1일차
// 1번 두 수의 합
function solution(num1, num2) {
    let answer = num1 + num2
    return answer;
}

// 2번 두 수의 차
function solution(num1, num2) {
    let answer = num1 - num2
    return answer;
}

// 3번 두 수의 곱
function solution(num1, num2) {
    let answer = num1 * num2
    return answer;
}

// 4번 몫 구하기
function solution(num1, num2) {
    return Math.floor(num1 / num2);
}

// 5번 나머지 구하기
function solution(num1, num2) {
    let answer = num1 % num2
    return answer;
}

// 6번 나이 출력

function solution(age) {
    let answer = 2022 - age + 1;
    return answer;
}

// 7번 숫자 비교하기
function solution(num1, num2) {
    return num1 === num2 ? 1 : -1
}

// 8번 각도기
function solution(angle) {
    if (0 < angle && angle < 90) {
        return 1
    } else if (angle === 90) {
        return 2
    } else if (90 < angle && angle < 180) {
        return 3
    } else {
        return 4
    }
}

// 9번 짝수의 합
function solution(n) {
    let arr = []
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            arr.push(i)
        }
    }
    let sum = 0
    arr.forEach((a) => {
        sum += a
    })

    return sum
}

