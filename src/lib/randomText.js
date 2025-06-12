export function randomText(size = 20) {
    const abc = 'aąbcčdeęėfghiįyjklmnoprsštuųūvzž';
    let text = '';

    for (let i = 0; i < size; i++) {
        text += abc[Math.floor(Math.random() * abc.length)];
    }

    return text;
}