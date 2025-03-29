// Import jQuery from CDN if needed
if (typeof window !== 'undefined' && !window.jQuery) {
    const script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    script.type = 'text/javascript';
    document.head.appendChild(script);
}
