function sendData() {
  const name = document.getElementById("name").value;
  fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name })
  })
  .then(response => response.json())
  .then(data => {
      document.getElementById("responseMessage").innerText = data.message;
  })
  .catch(error => console.error("Error:", error));
}
