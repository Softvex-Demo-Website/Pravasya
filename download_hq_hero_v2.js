import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targets = [
    { name: 'hero_ajanta_caves.png', query: 'Ajanta_Caves_view_from_view_point.jpg' },
    { name: 'hero_konkan_beach.png', query: 'Tarkarli_Beach_Malvan.jpg' },
    { name: 'hero-sahyadri_fort.png', query: 'Rajgad_Fort_Pune.jpg' },
    { name: 'hero_tadoba_tiger.png', query: 'Tadoba_Andhari_Tiger_Reserve_Tiger.jpg' },
    { name: 'hero_nashik_vineyard.png', query: 'Sula_Vineyards_Nashik.jpg' }
];

const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                downloadFile(response.headers.location, dest).then(resolve).catch(reject);
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded: ${dest}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
};

const searchAndDownload = async () => {
    for (const target of targets) {
        console.log(`Searching for ${target.query}...`);
        // Search Wikimedia (generator=search)
        const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(target.query)}&gsrlimit=1&prop=imageinfo&iiprop=url&format=json`;

        try {
            const data = await new Promise((resolve, reject) => {
                https.get(searchUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
                    let body = '';
                    res.on('data', (chunk) => body += chunk);
                    res.on('end', () => resolve(JSON.parse(body)));
                }).on('error', reject);
            });

            if (!data.query || !data.query.pages) {
                console.log(`No results for ${target.query}`);
                continue;
            }

            const pages = Object.values(data.query.pages);
            if (pages.length > 0 && pages[0].imageinfo) {
                const imageUrl = pages[0].imageinfo[0].url;
                const outputPath = path.join(__dirname, 'public', 'images', target.name);
                console.log(`Found URL: ${imageUrl}`);
                await downloadFile(imageUrl, outputPath);
            }
        } catch (e) {
            console.error(`Error processing ${target.name}:`, e.message);
        }
    }
};

searchAndDownload();
