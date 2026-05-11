<%*
const files =
    tp.user.getPsalm("Compline");

for (const file of files) {

    const cache =
        app.metadataCache.getFileCache(file);

    const fm = cache?.frontmatter ?? {};

    const number = fm["Number"] ?? "";
    const latin = fm["Latin Name"] ?? "";

    // Print heading
    tR += `**Psalm ${number}** — *${latin}*\n\n`;

    // Read file
    let content =
        await app.vault.read(file);

    // Remove YAML frontmatter
    content = content.replace(
        /^---[\s\S]*?---\n/,
        ""
    );

    // Insert psalm text
    tR += content + "\n\n";
}
%>