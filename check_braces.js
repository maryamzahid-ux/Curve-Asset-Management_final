const fs = require('fs');
const content = fs.readFileSync('c:\\Users\\Maryam\\Documents\\Larry_Admin Panel\\index.html', 'utf8');
let open = 0;
for (let i = 0; i < content.length; i++) {
    if (content[i] === '{') open++;
    if (content[i] === '}') open--;
}
console.log('Final open braces count:', open);

// Check script block specifically
const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>/);
if (scriptMatch) {
    const script = scriptMatch[1];
    let sOpen = 0;
    for (let i = 0; i < script.length; i++) {
        if (script[i] === '{') sOpen++;
        if (script[i] === '}') sOpen--;
    }
    console.log('Script open braces count:', sOpen);
}
