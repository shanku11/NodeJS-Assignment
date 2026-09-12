const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 80;

// Root landing page to easily navigate between exercises
app.get('/', (req, res) => {
  res.status(200).type('text/html').send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>NodeJS Assignment 2</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 2rem; line-height: 1.6; background-color: #f8fafc; }
        .card { background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); max-width: 600px; margin: 0 auto; }
        h1 { color: #1e293b; }
        ul { list-style: none; padding-left: 0; }
        li { margin-bottom: 0.75rem; }
        a { color: #2563eb; text-decoration: none; font-weight: 500; }
        a:hover { text-decoration: underline; }
        .badge { background: #e2e8f0; padding: 2px 8px; border-radius: 4px; font-size: 0.85rem; color: #475569; margin-right: 8px; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>NodeJS Assignment 2</h1>
        <p>Select an exercise below to view the output:</p>
        <ul>
          <li><span class="badge">Exercise 1</span> <a href="/api/exercise1">/api/exercise1</a> (Serves lib/index.html)</li>
          <li><span class="badge">Exercise 2</span> <a href="/api/exercise2">/api/exercise2</a> (Users Table from users.txt)</li>
          <li><span class="badge">Exercise 3</span>
            <ul>
              <li><a href="/api/exercise3/pages/home">/api/exercise3/pages/home</a></li>
              <li><a href="/api/exercise3/pages/about">/api/exercise3/pages/about</a></li>
              <li><a href="/api/exercise3/pages/contact">/api/exercise3/pages/contact</a></li>
            </ul>
          </li>
          <li><span class="badge">Exercise 4</span> (Static Files)
            <ul>
              <li><a href="/home.html">/home.html</a></li>
              <li><a href="/about.html">/about.html</a></li>
              <li><a href="/contact.html">/contact.html</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </body>
    </html>
  `);
});

// Exercise 1 Route
app.get('/api/exercise1', (req, res) => {
  res.status(200).type('text/html').sendFile(path.join(__dirname, 'lib', 'index.html'));
});

// Exercise 2 Route
app.get('/api/exercise2', (req, res) => {
  const filePath = path.join(__dirname, 'lib', 'users.txt');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const lines = fileContent.trim().split(/\r?\n/);
  let html = '<table>\n';
  lines.forEach((line, index) => {
    const cols = line.split('|').map(item => item.trim());
    html += '    <tr>\n';
    cols.forEach(col => {
      html += index === 0 ? `        <th>${col}</th>\n` : `        <td>${col}</td>\n`;
    });
    html += '    </tr>\n';
  });
  html += '</table>';
  res.status(200).type('text/html').send(html);
});

// Exercise 3 Routes
app.get('/api/exercise3/pages/home', (req, res) => {
  res.status(200).type('text/html').sendFile(path.join(__dirname, 'lib', 'home.html'));
});

app.get('/api/exercise3/pages/about', (req, res) => {
  res.status(200).type('text/html').sendFile(path.join(__dirname, 'lib', 'about.html'));
});

app.get('/api/exercise3/pages/contact', (req, res) => {
  res.status(200).type('text/html').sendFile(path.join(__dirname, 'lib', 'contact.html'));
});

// Exercise 4 Static Files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
