// 가위는 2 바위는 0 보는 5로 표현합니다. 
// 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.

// rsp 배열로 변경
// 배열의 요소가 동일한것을 변경해줌
// 가 2 > 0
// 바 0 > 5
// 보 5 > 2
// 배열 > 문자로 출력
function solution(rsp) {
    let arr = rsp.split('').map((e) => {
        switch (+e) { // 숫자로 바꿔주는 메서드?부호?
            case 2:
                return 0
            case 0:
                return 5
            case 5:
                return 2
        }
    })
    return arr.join('')
}

console.log(solution("205")) // "052"

// 세균 증식
// 어떤 세균은 1시간에 두배만큼 증식
// 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.

// 2마리 1시간 2 * 1시간 = 2배 4
// 2마리 2시간 2 * 2시간 = 2배 * 2배 8
// 2마리 3시간 2 * 3시간 = 2배 * 2배 * 2배 16

// n은 고정 t 를 구해야함.
// t는 2의 t제곱
function solution(n, t) {
    return n * Math.pow(2, t)
}

// 주사위의 개수
// 가 세 높 box / 모서리 길이? = 변 n 을 배열로 만듦
// 배열끼리 모두 곱해주면 개수 나옴
function solution(box, n) {
    let dice = box.map((a) => Math.floor(a / n))
    return dice.reduce((a, b) => a * b)
}
console.log(solution([1, 1, 1], 1)) // 12 