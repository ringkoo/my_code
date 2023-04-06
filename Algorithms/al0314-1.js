// 3일차 문제
// 문자열 뒤집기
function solution(my_string) {
    let arr = [...my_string]
    console.log(arr)
    let newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr.join("")

}
console.log(solution("jarcon"))

// 특정 문자 제거하기
function solution(my_string, letter) {
    const arr = [...my_string]
    const answer = arr.filter((a) => a !== letter);

    return answer.join("")
}
console.log(solution("abcdef", "f"))

// 문자 반복 출력하기
function solution(my_string, n) {
    let result = '';

    for (let i = 0; i < my_string.length; i++) {
        result += my_string[i].repeat(n);
    }

    return result;
}

// 편지
function solution(message) {
    let arr = message.split('')
    let width = arr.length * 2
    return width
}
console.log(solution('happy birthday!'))

// 모음 제거
function solution(my_string) {
    let arr = my_string.split('')
    let moum = ['a', 'e', 'i', 'o', 'u']
    let answer = arr.filter((a) => !moum.includes(a))
    return answer.join('')
}
console.log(solution("bus"))

// 문자열안에 문자열
function solution(str1, str2) {
    if (str1.includes(str2)) {
        return 1
    } else {
        return 2
    }
    
}