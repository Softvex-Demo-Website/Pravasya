const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream/promises');

const targets = [
    { name: 'hero-hq-ajanta.jpg', query: 'Ajanta_Caves_view_from_view_point.jpg' },
    { name: 'hero-hq-konkan.jpg', query: 'Tarkarli_Beach_Sunset.jpg' },
    { name: 'hero-hq-sahyadri.jpg', query: 'Rajgad_Fort_Pune.jpg' },
    { name: 'hero-hq-tadoba.jpg', query: 'Tadoba_Andhari_Tiger_Reserve_Tiger.jpg' },
    { name: 'hero-hq-nashik.jpg', query: 'Sula_Vineyards_Nashik.jpg' }
];

async function downloadFile(url, outputPath) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
    const fileStream = fs.createWriteStream(outputPath);
    // @ts-ignore
    await pipeline(res.body, fileStream);
}

async function searchAndDownload() {
    for (const target of targets) {
        console.log(`Processing ${target.name} (${target.query})...`);
        try {
            // Wikipedia API search
            const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(target.query)}&gsrlimit=1&prop=imageinfo&iiprop=url&format=json&origin=*`;
            const searchRes = await fetch(searchUrl);
            const searchData = await searchRes.json();

            if (!searchData.query || !searchData.query.pages) {
                console.log(`No results found for ${target.query}`);
                continue;
            }

            const pages = Object.values(searchData.query.pages);
            const imageUrl = pages[0].imageinfo[0].url;

            console.log(`Downloading from ${imageUrl}...`);
            const outputPath = path.join(__dirname, 'public', 'images', target.name);
            await downloadFile(imageUrl, outputPath);
            console.log(`Social! Saved to ${outputPath}`);
        } catch (error) {
            console.error(`Error for ${target.name}:`, error);
        }
    }
}

searchAndDownload();
