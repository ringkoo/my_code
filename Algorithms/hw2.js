// 컴퓨터는 0과 9 사이의 서로 다른 숫자 3개를 무작위로 뽑습니다. (ex) 123, 759
// 사용자는 컴퓨터가 뽑은 숫자를 맞추기 위해 시도합니다.
// 컴퓨터는 사용자가 입력한 세자리 숫자에 대해서, 아래의 규칙대로 스트라이크(S)와 볼(B)를 알려줍니다.
//      숫자의 값과 위치가 모두 일치하면 S
//      숫자의 값은 일치하지만 위치가 틀렸으면 B
// 기회는 무제한이며, 몇번의 시도 후에 맞췄는지 기록됩니다.
// 숫자 3개를 모두 맞춘 경우, 게임을 종료합니다.

// 0 ~ 9 사이 서로 다른 숫자 3개 뽑기
let rannum = []; // 랜덤 숫자 3개를 담을 배열
let numleng = 3; // 배열의 길이

while (rannum.length < numleng) {
    let newNum = Math.floor(Math.random() * 10)
    if (!rannum.includes(newNum)) {
        rannum.push(newNum)
    }
} console.log('정답 ' + rannum)

let count = 1

// 사용자의 입력값을 받고 배열로 변경
while (true) {

    let S = 0
    let B = 0

    let user = prompt("숫자 3개를 입력해주세요")
    let newuser = user.split('').map(Number)
    
    // 입력 할때마다 카운트
    for (let i = 0; i < numleng; i++) {
        if (newuser[i] === rannum[i])  {
            S++
        } else if (rannum.includes(newuser[i])) {
            B++
        } else {

        }
    }
    // 만약 S 가 3이면 모두 맞음
    if (S === 3) {
        alert(`${count}번만에 맞추셨습니다. 게임을 종료합니다`)
        break
    } else {
        alert(`${count}번째 시도 : ${newuser.join('')} ${B}B ${S}S`)
    }
    count++
}
