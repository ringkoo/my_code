// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. 
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

function solution(s) {
    let str = s.toUpperCase()
    let arr = str.split('')
    let p = arr.filter(element => 'P' === element).length;
    let y = arr.filter(element => 'Y' === element).length;

    if (p === y) {
        return true
    } else {
        return false
    }
}
console.log(solution("pPoooyY")) // true


// 어떤 정수들이 있습니다. 
// 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 
//이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 
//실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

function solution(absolutes, signs) {
    let result = absolutes.map((a, i) => a * (signs[i] ? 1 : -1))
    return result.reduce((a, b) => a + b)
}

console.log(solution([4, 7, 12], [true, false, true])) // 9