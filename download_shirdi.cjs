const https = require('https');
const fs = require('fs');
const path = require('path');

const url = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Sri_Sai_Baba_Temple_%2C_Shirdi.jpg";
const outputPath = path.join(process.cwd(), 'public', 'images', 'shirdi-temple.jpg');

console.log(`Target URL: ${url}`);
console.log(`Output Path: ${outputPath}`);

function download(url, dest, cb) {
    const file = fs.createWriteStream(dest);

    const request = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, function (response) {
        if (response.statusCode === 301 || response.statusCode === 302) {
            console.log(`Redirecting to ${response.headers.location}`);
            file.close();
            fs.unlink(dest, () => { });
            return download(response.headers.location, dest, cb);
        }

        if (response.statusCode !== 200) {
            console.error(`Failed to download: ${response.statusCode}`);
            file.close();
            fs.unlink(dest, () => { });
            if (cb) cb(new Error(response.statusCode));
            return;
        }

        response.pipe(file);
        file.on('finish', function () {
            file.close(cb);
            console.log("Download completed successfully.");
        });
    }).on('error', function (err) {
        fs.unlink(dest, () => { });
        if (cb) cb(err);
    });
}

download(url, outputPath, (err) => {
    if (err) console.error("Final Error:", err.message);
    else console.log("Done.");
});
