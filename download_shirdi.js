const https = require('https');
const fs = require('fs');
const path = require('path');

const url = "https://upload.wikimedia.org/wikipedia/commons/e/e0/Sri_Sai_Baba_Temple_%2C_Shirdi.jpg";
const outputPath = path.join(process.cwd(), 'public', 'images', 'shirdi-temple.jpg');

const file = fs.createWriteStream(outputPath);

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
    if (response.statusCode !== 200) {
        console.error(`Failed to download: ${response.statusCode}`);
        return;
    }
    response.pipe(file);
    file.on('finish', () => {
        file.close();
        console.log('Download completed.');
    });
}).on('error', (err) => {
    fs.unlink(outputPath, () => { }); // Delete the file async. (But we don't check the result) - valid for this snippet.
    console.error(`Error: ${err.message}`);
});
