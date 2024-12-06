 export const ToSlug = (text) => {
    return text
        .toLowerCase() // Convert to lowercase
        .replace(/[^a-z0-9\s]/g, '') // Remove special characters
        .trim() // Trim spaces at the ends
        .replace(/\s+/g, '-'); // Replace spaces with hyphens
};