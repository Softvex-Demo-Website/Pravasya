import fs from 'fs';
import https from 'https';
import path from 'path';

const urls = [
    "https://upload.wikimedia.org/wikipedia/commons/e/e1/Pune_Skyline.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Pune_Skyline.jpg/800px-Pune_Skyline.jpg",
    "https://images.unsplash.com/photo-1572295679545-c477215c2980?auto=format&fit=crop&w=800&q=80"
];

const dest = path.join(process.cwd(), "public", "images", "pune-city-skyline.jpg");

const downloadWithFallback = (index) => {
    if (index >= urls.length) {
        console.error("All URLs failed.");
        return;
    }

    const url = urls[index];
    console.log(`Trying URL: ${url}`);

    const file = fs.createWriteStream(dest);
    const options = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
    };

    https.get(url, options, function (response) {
        if (response.statusCode === 200 && response.headers['content-type'].startsWith('image')) {
            response.pipe(file);
            file.on('finish', () => {
                file.close(() => console.log(`Download complete: ${path.basename(dest)} from ${url}`));
            });
        } else if (response.statusCode === 302 || response.statusCode === 301) {
            https.get(response.headers.location, options, function (redirectResponse) {
                if (redirectResponse.statusCode === 200 && redirectResponse.headers['content-type'].startsWith('image')) {
                    redirectResponse.pipe(file);
                    file.on('finish', () => {
                        file.close(() => console.log(`Download complete (redirect): ${path.basename(dest)}`));
                    });
                } else {
                    file.close();
                    fs.unlink(dest, () => { });
                    console.log("Redirect failed or not an image.");
                    downloadWithFallback(index + 1);
                }
            });
        } else {
            file.close();
            fs.unlink(dest, () => { });
            console.log(`Failed with status ${response.statusCode} or type ${response.headers['content-type']}`);
            downloadWithFallback(index + 1);
        }
    }).on('error', function (err) {
        fs.unlink(dest, () => { });
        console.error("Error downloading image:", err.message);
        downloadWithFallback(index + 1);
    });
};

downloadWithFallback(0);
