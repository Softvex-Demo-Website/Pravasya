import fs from 'fs';
import https from 'https';
import path from 'path';

// Alternative URL: Pune Skyline.jpg (2013)
// https://commons.wikimedia.org/wiki/File:Pune_Skyline.jpg
const url = "https://upload.wikimedia.org/wikipedia/commons/2/29/Pune_Skyline.jpg";
// Note: '2/29' was the hash for the PREVIOUS failed one? Let's check the search result for THIS one.
// Let's rely on a known good public URL or search result.
// Search result 7 said: Pune Skyline.jpg
// Let's try to get IT from a generic source or use a different known image.

// Let's try a different approach: Use the 'Pune-City.jpg' which seemed simple.
// URL: https://upload.wikimedia.org/wikipedia/commons/e/e1/Pune-City.jpg ?? Guessing hashes is bad.

// Let's try the "Magarpatta" one correctly.
// File:Magarpatta_cyber_city.jpg -> https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Magarpatta_cyber_city.jpg/800px-Magarpatta_cyber_city.jpg
const magarpattaUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Magarpatta_cyber_city.jpg/800px-Magarpatta_cyber_city.jpg";

const dest = path.join(process.cwd(), "public", "images", "pune-real-skyline.jpg");
const file = fs.createWriteStream(dest);

const options = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
};

https.get(magarpattaUrl, options, function (response) {
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
