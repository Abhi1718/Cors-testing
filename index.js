fetch("http://127.0.0.1:8000/sample",{method:"GET"})
.then(res => res.json())
.then(data => console.log(data))