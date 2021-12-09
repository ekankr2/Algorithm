var obj = {
    name: 'B',
    print: function () {
        var inner1 = function () {console.log(this.name, name)};
        inner1();

        var inner2 = () => console.log(this.name, name);
        inner2();

        var name = 'C';
        console.log(window.name, this.name, name);
    }
}

name = 'A';
obj.print();

B, B
B, B
undefined, B, B

// 예상되는 Console 출력 값은?



/**********************************************************************************/
const solution = (patterns: string[], sources: string[]): void => {
    const result1: string[] = [];
    const result2: string[] = [];
    const list: string[] = patterns.slice();
    const set: Set<string> = new Set(patterns.slice());

    sources.forEach((str) => {
        if (!list.includes(str)) result1.push(str);
        if (!set.has(str)) result2.push(str);
    });

    console.log(result1.length === result2.length);
};

solution(['aaa', 'bbb', 'ccc'], ['aaa', 'ddd']);

// 예상되는 Console 출력 값은?

aaa bbb ccc ddd // 길이는 : 5
aaa bbb ccc ddd   // 길이는 : 4

// 결과값 : true







/**********************************************************************************/
var sleep = (time) => {
    console.log('sleep:', time);
    while (true); // 무한루프
}

setTimeout(() => sleep(10000), 0);
setTimeout(() => sleep(20000), 0);

// 예상되는 Console 출력 값은?
// sleep : 10000
// sleep : 20000

sleep: 10000
sleep: 20000
