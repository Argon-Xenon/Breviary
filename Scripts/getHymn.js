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

        const matchesHour = hours.includes(hour);
        const matchesSeason = seasons.includes(season);
        const matchesCommon = commons.length > 0;

        if (matchesHour && (matchesSeason || matchesCommon)) {
            hymns.push({ file, fm });
        }
    }

    if (hymns.length === 0) return null;

    // Priority:
    // 1. exact season match
    // 2. common fallback
    const seasonal = hymns.find(h =>
        h.fm.seasons?.includes(season)
    );

    const chosen = seasonal ?? hymns[0];

    return chosen.file.path.replace(/\.md$/, "");
}

module.exports = getHymn;
