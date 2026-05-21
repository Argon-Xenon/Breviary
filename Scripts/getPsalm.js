function getPsalm(hour) {

    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ][new Date().getDay()];

    const schema = {
        Compline: {
            Sunday: ["4", "31_1-5", "91"],
            Monday: ["7", "15", "125"],
            Tuesday: ["11", "16", "30"],
            Wednesday: ["40", "120", "134"],
            Thursday: ["46", "47", "48"],
            Friday: ["13", "86", "141"],
            Saturday: ["85", "129", "130"]
        }
    };

    const numbers =
        schema[hour]?.[weekday] ?? [];

    const files =
        app.vault.getMarkdownFiles();

    return numbers.map(num => {

        return files.find(file => {

            const cache =
                app.metadataCache.getFileCache(file);

            const fm = cache?.frontmatter;

            return (
                fm?.Type === "psalm" &&
                String(fm.Number) === String(num)
            );

        });

    }).filter(Boolean);
}

module.exports = getPsalm;
