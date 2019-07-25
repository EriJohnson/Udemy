const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in numbers) {
    if (x == 5) break
    console.log(`índice ${x} = ${numbers[x]}`);
}

for(let y in numbers) {
    if(y == 7) continue
    console.log(`ìndice ${y} = ${numbers[y]}`);
    
}

// console.log(`O último X iterado foi: ${x}`);