const charset =
    'aąbcćdeęfghijklłmnńoópqrsśtuvwxyzżźAĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŻŹ,.;:!-_1234567890()[]{}';
const testString = `Noc byla wietrzna, sniezna, a wichry spiewaly
W kominach swoje zwykle placzace choraly.`;

const inputTag = document.querySelector('#input');
const outputTag = document.querySelector('p.result');
const moveByInput = document.querySelector('input[type="number"]');
const applyButton = document.querySelector('button.start');
const charsetTag = document.querySelector('p.charset');

charsetTag.innerHTML = charset;

const cezar = (input, moveBy = 0) => {
    console.log(`Encoding...: ${input}`);

    let output = '';

    [...input].map((letter, inputIndex) => {
        if (letter === ' ') {
            output += ' ';
        } else if (letter === '\n') {
            output += '\n';
        } else {
            [...charset].map((char, charsetIndex) => {
                if (letter === char) {
                    output += charset[charsetIndex + moveBy];
                }
            });
        }
    });

    return output;
};

inputTag.value = testString;

const handleUpdate = e => {
    outputTag.innerHTML = cezar(inputTag.value, +moveByInput.value);
};

console.log(inputTag);
inputTag.onkeypress = handleUpdate;
applyButton.onclick = handleUpdate;
moveByInput.onclick = handleUpdate;
