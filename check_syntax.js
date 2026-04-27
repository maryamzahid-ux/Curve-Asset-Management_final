const fs = require('fs');
const content = fs.readFileSync('c:\\Users\\Maryam\\Documents\\Larry_Admin Panel\\index.html', 'utf8');
const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>/);
if (scriptMatch) {
    const script = scriptMatch[1];
    try {
        new Function(script);
        console.log('Syntax OK');
    } catch (e) {
        console.error('Syntax Error:', e.message);
        // Find the line number in the script
        const lines = script.split('\n');
        // This is tricky because the script starts at some line in index.html
        console.error('Stack:', e.stack);
    }
} else {
    console.log('No script found');
}
