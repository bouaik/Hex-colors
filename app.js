(function () {
    const hexValue = document.getElementById('hex-value')
    const btn = document.getElementById('btn')

    btn.addEventListener('click', createHex)

    function createHex () {
        let letters = '0123456789ABCDEF';
        let hexColor = '#';
        for (var i = 0; i < 6; i++) {
            hexColor += letters[Math.floor(Math.random() * 16)];
        }
        document.body.style.backgroundColor = hexColor
        hexValue.textContent = hexColor
    }

})();