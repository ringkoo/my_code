// 2일차
// 양꼬치
function solution(n, k) {
    const yang = n * 12000
    const drink = (k - Math.floor(n / 10)) * 2000
    return yang + drink
}
console.log(solution(10, 3))

// 피자 나눠 먹기(1)
function solution(n) {
    const pizza = Math.ceil(n / 7)
    return pizza
}

// 피자 나눠먹기 (3)
function solution(slice, n) {
    pizza = Math.ceil(n / slice)
    return pizza
}
console.log(solution(7, 10))

// 점의 위치 구하기

function solution(dot) {

    let x = dot[0]
    let y = dot[1]

    if (x > 0 && y > 0) {
        return 1
    } else if (x < 0 && y > 0) {
        return 2
    } else if (x < 0 && y < 0) {
        return 3
    } else {
        return 4
    }
}

// 아이스 아메리카노
function solution(money) {
    const coffee = Math.floor(money / 5500)
    const change = money % 5500
    return [coffee, change]
}

console.log(solution(5500))

// 옷가게 할인 받기
// 10만원 이상 사면 5% , 30만원 이상사면 10%, 50만원 이상 사면 20% 할인해줌
// 최종 가격 = 기본 가격 - 할인가격
// if문은 위에서부터 읽히고 큰수부터 작은수로 써내려가야함
function solution(price) {
    if (price >= 500000) {
        return parseInt(price - price * 0.2)
    } else if (price >= 300000) {
        return parseInt(price - price * 0.1)
    } else if (price >= 100000) {
        return parseInt(price - price * 0.05)
    } else {
        return price
    }
}
console.log(solution(580000))


// 제곱수 판별하기
function solution(n) {
    let x = Math.sqrt(n)
    if (x % 1 === 0) {
        return 1
    } else {
        return 2
    }
}
console.log(solution(17))