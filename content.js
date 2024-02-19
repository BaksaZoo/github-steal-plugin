function scheduleForReplace() {
    setInterval(() => {
        const elements = document.querySelectorAll('*:not(script):not(style):not(noscript):not(textarea)');
        elements.forEach(function (element) {
            element.childNodes.forEach(function (node) {
                if ((node.nodeType === 3 || node.nodeType === 1) && node.nodeValue)
                    node.nodeValue = node.nodeValue.replace(/fork/i, 'steal');
            });
        });
    }, 100)
}

window.addEventListener('load', scheduleForReplace)