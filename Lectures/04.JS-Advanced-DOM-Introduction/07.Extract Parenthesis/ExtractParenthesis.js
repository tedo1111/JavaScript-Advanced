function extract(elementId) {
    const element = document.getElementById(elementId);

    const pattern = /\(([^\(\)]+)\)/g;

    const matches = element.textContent.matchAll(pattern);

    const result = Array.from(matches)
        .map(match => match[1])
        .join('; ');

    return result;
}
