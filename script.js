document.addEventListener('keydown', function() {
    document.getElementById('main-page').classList.add('hidden');
    document.getElementById('menu-page').classList.remove('hidden');
});

function showPage(pageId) {
    const pages = ['main-page', 'menu-page', 'text-to-binary', 'binary-to-text', 'number-to-binary', 'binary-to-number'];
    pages.forEach(page => document.getElementById(page).classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}

function convertTextToBinary() {
    const text = document.getElementById('text-input').value;
    let binary = '';
    for (let i = 0; i < text.length; i++) {
        binary += text[i].charCodeAt(0).toString(2).padStart(8, '0') + ' ';
    }
    document.getElementById('text-to-binary-output').textContent = binary.trim();
}

function convertBinaryToText() {
    const binary = document.getElementById('binary-input').value.split(' ');
    let text = '';
    for (let i = 0; i < binary.length; i++) {
        text += String.fromCharCode(parseInt(binary[i], 2));
    }
    document.getElementById('binary-to-text-output').textContent = text;
}

function convertNumberToBinary() {
    const number = document.getElementById('number-input').value;
    document.getElementById('number-to-binary-output').textContent = Number(number).toString(2);
}

function convertBinaryToNumber() {
    const binary = document.getElementById('binary-input-num').value;
    document.getElementById('binary-to-number-output').textContent = parseInt(binary, 2);
}
