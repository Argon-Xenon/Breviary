<%*
const files =
    tp.user.getPsalm("Compline");

for (const file of files) {

    let content =
        await app.vault.read(file);

    // Remove YAML frontmatter
    content = content.replace(
        /^---[\s\S]*?---\n/,
        ""
    );

    tR += content + "\n\n";
}
%>