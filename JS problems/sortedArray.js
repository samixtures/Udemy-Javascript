let input = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
//output = [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]

function sortArray(inp) {
    for (let i  = 0; i < inp.length; i++) {
        console.log(`i is ${i}`)
        for (let j = 0; j < inp.length; j++) {
            if (inp[j] > inp[j+1]) { // 1 < 2
                let temp = inp[j+1]; // 1
                inp[j+1] = inp[j] // 0 = 2
                inp[j] = temp; // 1 = 1
            }
        }
    }
    let c = 0;
    let result = [];
    while (inp[c] == inp[c+1]) {
        result[0] = []
    }
    let value = inp[0]; //1
    inp.forEach(x, i => {
        if (inp[i] == inp[i+1] == value) {

        }
        console.log(x);
    });
};

sortArray(input);