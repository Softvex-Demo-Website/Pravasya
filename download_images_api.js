import fs from 'fs';
import https from 'https';
import path from 'path';

const files = [
    { title: 'File:Awesome_waterfall.jpg', dest: 'public/images/malshej-ghat.jpg' },
    { title: 'File:Yashwant_Lake_Toranmal.jpg', dest: 'public/images/toranmal-lake.jpg' },
    { title: 'File:Bhandardara_lake_Arthur-_Nashik.jpg', dest: 'public/images/bhandardara-lake.jpg' }
];

const downloadFile = (url, dest) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        res.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${dest} from ${url}`);
        });
    }).on('error', (err) => {
        console.error(`Error downloading ${url}: ${err.message}`);
    });
};

const fetchUrlAndDownload = (item) => {
    const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(item.title)}&prop=imageinfo&iiprop=url&format=json`;

    https.get(apiUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            try {
                const json = JSON.parse(data);
                const pages = json.query.pages;
                const pageId = Object.keys(pages)[0];
                const page = pages[pageId];

                if (page.imageinfo && page.imageinfo[0] && page.imageinfo[0].url) {
                    downloadFile(page.imageinfo[0].url, item.dest);
                } else {
                    console.error(`No URL found for ${item.title}`);
                    console.log(JSON.stringify(page, null, 2));
                }
            } catch (e) {
                console.error(`Error parsing API response for ${item.title}: ${e.message}`);
            }
        });
    }).on('error', (err) => {
        console.error(`API Request failed for ${item.title}: ${err.message}`);
    });
};

files.forEach(item => {
    fetchUrlAndDownload(item);
});
