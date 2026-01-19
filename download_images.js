import fs from 'fs';
import https from 'https';
import path from 'path';

const images = [
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Awesome_waterfall.jpg',
        dest: 'public/images/malshej-ghat.jpg'
    },
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Bhandardara_lake_Arthur-_Nasik.jpg',
        dest: 'public/images/bhandardara-lake.jpg'
    },
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Yashwant_Lake_Toranmal.jpg',
        dest: 'public/images/toranmal-lake.jpg'
    }
];

const downloadImage = (url, dest) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
        if (response.statusCode !== 200) {
            console.error(`Failed to download ${url}: ${response.statusCode}`);
            return;
        }
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${dest}`);
        });
    }).on('error', (err) => {
        fs.unlink(dest);
        console.error(`Error downloading ${url}: ${err.message}`);
    });
};

images.forEach(img => {
    const fullPath = path.resolve(process.cwd(), img.dest);
    downloadImage(img.url, fullPath);
});
