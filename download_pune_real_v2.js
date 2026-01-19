import fs from 'fs';
import https from 'https';
import path from 'path';

// Corrected URL from search result
const url = "https://upload.wikimedia.org/wikipedia/commons/f/f6/Pune_West_skyline_-_March_2017.jpg";
const dest = path.join(process.cwd(), "public", "images", "pune-real-skyline.jpg");

const file = fs.createWriteStream(dest);

const options = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
};

https.get(url, options, function (response) {
    console.log(`Status: ${response.statusCode}`);
    if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
            // Verify not empty
            fs.stat(dest, (err, stats) => {
                if (!err && stats.size > 1000) {
                    console.log(`Download complete: ${stats.size} bytes`);
                } else {
                    console.log(`Download failed: File too small (${stats.size} bytes)`);
                }
            });
        });
    } else {
        console.log(`Failed: ${response.statusCode}`);
        file.close();
    }
}).on('error', function (err) {
    console.error("Error:", err.message);
});
