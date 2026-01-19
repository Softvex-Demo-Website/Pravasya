import fs from 'fs';
import https from 'https';
import path from 'path';

const url = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Pune_Skyline.jpg/1024px-Pune_Skyline.jpg";
const dest = path.join(process.cwd(), "public", "images", "pune-city-skyline.jpg");

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
            file.close(() => console.log("Download complete"));
        });
    } else {
        console.log(`Failed: ${response.statusCode}`);
        file.close();
    }
}).on('error', function (err) {
    console.error("Error:", err.message);
});
