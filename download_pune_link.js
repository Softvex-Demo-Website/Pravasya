import fs from 'fs';
import https from 'https';
import path from 'path';

// Extracted URL from the Google redirect
const url = "https://lp-cms-production.imgix.net/2025-06/shutterstock1416547208.jpg?auto=format,compress&q=72&w=1440&h=810&fit=crop";
const dest = path.join(process.cwd(), "public", "images", "pune-lonely-planet.jpg");

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
