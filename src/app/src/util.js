const text = (lines) => {
    let textString = "";
    lines.forEach(line => {
        textString = textString + line + `\r\n`;
    });
    return textString.trim();
};

exports.text = text;