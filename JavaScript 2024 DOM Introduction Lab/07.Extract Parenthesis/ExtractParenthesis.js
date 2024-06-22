function extract(contentId) {
    const paragraph = document.getElementById(contentId);
    if (!paragraph) {
        return '';
    }

    const text = paragraph.textContent;

    const matches = text.match(/\(([^)]+)\)/g);

    const extractedTexts = matches ? matches.map(match => match.slice(1, -1)) : [];

    return extractedTexts.join('; ');
}