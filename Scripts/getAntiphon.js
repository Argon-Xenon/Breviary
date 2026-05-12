function getAntiphon(file) {

    const cache =
        app.metadataCache.getFileCache(file);

    const fm = cache?.frontmatter ?? {};

    /*
        FUTURE:
        feast overrides
        seasonal overrides
        commons
        etc.
    */

    return fm["Proper Antiphon"] ?? "";
}

module.exports = getAntiphon;
