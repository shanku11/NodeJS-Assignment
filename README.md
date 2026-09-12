# NodeJS-Assignment

Please create the file names with their respective exercise numbers like `exercise1.js`, `exercise2.js`, ..., `exercise4.js`.

All supporting documents (`index.html`, `users.txt`, `home.html`, `contact.html`, & `about.html`) need to be placed under the `lib` folder.

## File structure to upload:
```
<YOUR_FIRST_NAME>-NodeJS-Assignment2/
          exercise1.js
          exercise2.js
          exercise3.js
          exercise4.js
          package.json
          lib/
             index.html
             users.txt
             home.html
             contact.html
             about.html
          public/
             HTML, CSS & JavaScript files here
```

---

## Exercise 1:
### Objective:
Create a simple Node.js web server that listens on port 80 and returns the `index.html` file when the endpoint `/api/exercise1` is accessed.

When this endpoint is hit, the server should:
- Return the `index.html` file
- Send a 200 status code
- Send the response as `text/html`
- Your `index.html` file must contain `<title>Index</title>`

---

## Exercise 2:
### Objective:
Create a simple Node.js web server that listens on port 80 and returns an HTML table generated from the data in `users.txt` when the endpoint `/api/exercise2` is accessed.

When this endpoint is hit, the server should:
- Read the contents of the `users.txt` file
- Convert the text data into an HTML table
- Include table headers (`<th>`) and table rows (`<td>`)
- Send the response as `text/html`
- Send a 200 status code

---

## Exercise 3:
### Objective:
Create a simple Node.js web server and set up routes to serve three HTML pages: `home.html`, `contact.html`, and `about.html`.

When this endpoint is hit, the server should:
- Return the correct HTML file
- Send a 200 status code
- Send the response as `text/html`

Required Endpoints:
- `http://localhost/api/exercise3/pages/home` – Launches `home.html`
- `http://localhost/api/exercise3/pages/about` – Launches `about.html`
- `http://localhost/api/exercise3/pages/contact` – Launches `contact.html`

Your HTML files must contain:
`<title>Home Page</title>`, `<title>Contact Page</title>`, and `<title>About Page</title>`

---

## Exercise 4:
### Objective:
Write the Node.js code to create a web server for a static website that contains multiple `.html` files.
You should not hardcode any routes. All HTML files must be served automatically from a folder named `public`.

Instructions:
- In the root folder of your Node.js project, create a folder named `public`.
- Place all your `.html` files (static website files) inside the `public` folder.
- Use Express static middleware (`app.use(express.static('public'))`) to make these files accessible from the browser.
- Do not manually write routes for individual pages.
- The web server should return each `.html` file when accessed directly from the URL with 200 status code and `text/html`.

URLs:
- `http://localhost/home.html` -> loads `home.html`
- `http://localhost/about.html` -> loads `about.html`
- `http://localhost/contact.html` -> loads `contact.html`

Your HTML files should contain:
`<title>Home Page</title>`, `<title>About Page</title>`, and `<title>Contact Page</title>`
