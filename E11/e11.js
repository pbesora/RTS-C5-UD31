let n1;
let n2;
let res;
let sumas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let index = 0; index < 36000; index++) {
    n1 = Math.floor(Math.random() * 6 + 1);
    n2 = Math.floor(Math.random() * 6 + 1);
    res = n1 + n2;

    sumas[res - 2]++;
}
console.log(sumas);