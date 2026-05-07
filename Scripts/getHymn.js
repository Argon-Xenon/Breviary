function getHymn(hour, season) {
    const files = app.vault.getMarkdownFiles();

    const hymns = [];

    for (const file of files) {
        const cache = app.metadataCache.getFileCache(file);
        const fm = cache?.frontmatter;

        if (!fm || fm.type !== "hymn") continue;

        const hours = fm.hours ?? [];
        const seasons = fm.seasons ?? [];
        const commons = fm.commons ?? [];

        if (
            hours.includes(hour) &&
            (seasons.includes(season) || commons.length > 0)
        ) {
            hymns.push({ file, fm });
        }
    }

    if (hymns.length === 0) return null;

    const seasonal = hymns.find(h =>
        h.fm.seasons?.includes(season)
    );

    const chosen = seasonal ?? hymns[0];

    // ✅ only return hymn title
    return chosen.file.basename;
}

module.exports = getHymn;
