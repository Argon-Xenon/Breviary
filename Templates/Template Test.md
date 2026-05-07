<%*
const season = tp.user.getSeason();
const hymnName = tp.user.getHymn("Compline", season);

// find the file by basename
const file = app.vault.getMarkdownFiles()
    .find(f => f.basename === hymnName);

if (!file) {
    tR += `Hymn not found: ${hymnName}`;
    return;
}

let content = await app.vault.read(file);

// strip YAML frontmatter
content = content.replace(/^---[\s\S]*?---\n/, "");

tR += content;
%>