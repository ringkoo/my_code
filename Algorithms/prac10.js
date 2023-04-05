// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때
// 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 
// 예를 들어 strings가 ["sun", "bed", "car"]이고 
// n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.



// 각각의 배열의 요소들을 새로운 배열로 만듦
function solution(strings, n) {
    let arr = strings.sort((a, b) => {
        if (a[n] > b[n]) {
            return 1
        } else if ( a[n] < b[n]) {
            return -1
        } else {
            if(a > b) {
                return 1
            } else {
                return -1
            }
        }
    })
    return arr
}
console.log(solution(["sun", "bed", "car"], 1)) // ["car", "bed", "sun"]



// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 
// 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.


function solution(my_string, num1, num2) {
    let arr = my_string.split('')
    let tmp = arr[num1]
    arr[num1] = arr[num2]
    arr[num2] = tmp
    

    return arr.join('')
}
console.log(solution("hello", 1, 2))