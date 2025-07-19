const knownCookies = {
  "ga": "analytics",
  "_ga": "analytics",
  "_gid": "analytics",
  "fbp": "marketing",
  "fr": "marketing",
  "sessionid": "essential",
  "csrftoken": "essential"
};

function analyzeCookies() {
  const input = document.getElementById('cookieInput').value;
  const resultsDiv = document.getElementById('results');
  const cookies = input.split(';').map(c => c.trim()).filter(c => c.length > 0);

  if (cookies.length === 0) {
    resultsDiv.innerHTML = '<p>Nessun cookie inserito.</p>';
    return;
  }

  let html = '<ul>';
  cookies.forEach(cookie => {
    const [name] = cookie.split('=');
    const type = knownCookies[name] || 'sconosciuto';
    html += `<li><strong>${name}</strong>: tipo ${type}</li>`;
  });
  html += '</ul>';

  resultsDiv.innerHTML = html;
}

