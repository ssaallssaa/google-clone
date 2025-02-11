function search() {
    const query = document.getElementById('search-box').value;
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.location.href = url;
}