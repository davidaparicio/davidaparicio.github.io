# HTTP Status Codes Map

An interactive metro-style map visualization of HTTP status codes, presented as a subway/metro map with different colored lines representing different status code families.

## 🚇 Overview

This project visualizes HTTP status codes in the style of a transit map, making it easy to understand and navigate the various HTTP response codes. Each status code family is represented by a different colored line:

- **Dark Blue (1xx)**: Informational responses
- **Green (2xx)**: Success responses  
- **Light Blue (3xx)**: Redirection messages
- **Red (4xx)**: Client error responses
- **Orange (5xx)**: Server error responses

## 🎯 Features

- Interactive SVG-based metro map
- Color-coded status code families
- Clickable stations for each HTTP status code
- Responsive design that works on desktop and mobile
- Fun location names like "JSON Town", "SOAP Dead End", "Hypermedia Stadium"
- Tooltips showing status code details

## 🚀 Getting Started

### Prerequisites

No build process required - this is a static HTML/CSS/JavaScript project.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/davidaparicio/http-status-codes-map.git
cd http-status-codes-map
```

2. Open `index.html` in your web browser, or serve it with a local web server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

3. Navigate to `http://localhost:8000` in your browser

## 📁 Project Structure

```
.
├── index.html          # Main HTML file
├── css/               # Stylesheets
│   ├── map.css        # Main map styling
│   ├── layout.css     # Layout styles
│   └── ...           # Other CSS dependencies
├── js/               # JavaScript files
│   ├── d3.min.js     # D3.js for interactive features
│   └── ...          # Other JS dependencies
└── img/             # Images and favicons
    ├── map.svg      # Metro map SVG
    └── ...         # Favicon files
```

## 🗺️ Status Code Coverage

The map includes the most common HTTP status codes:

### 1xx Informational
- 100 Continue
- 101 Switching Protocols
- 102 Processing

### 2xx Success
- 200 OK
- 201 Created
- 202 Accepted
- 203 Non-Authoritative Information
- 204 No Content
- 205 Reset Content
- 206 Partial Content

### 3xx Redirection
- 300 Multiple Choices
- 301 Moved Permanently
- 302 Found
- 303 See Other
- 304 Not Modified
- 305 Use Proxy
- 307 Temporary Redirect
- 308 Permanent Redirect

### 4xx Client Errors
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 405 Method Not Allowed
- 406 Not Acceptable
- 407 Proxy Authentication Required
- 408 Request Timeout
- 409 Conflict
- 410 Gone
- 411 Length Required
- 412 Precondition Failed
- 413 Request Entity Too Large
- 414 Request URI Too Long
- 415 Unsupported Media Type
- 416 Requested Range Not Satisfiable
- 417 Expectation Failed
- 418 I'm a Teapot
- 422 Unprocessable Entity
- 423 Locked
- 424 Failed Dependency
- 426 Upgrade Required
- 428 Precondition Required
- 429 Too Many Requests
- 431 Request Header Fields Too Large
- 451 Unavailable For Legal Reasons

### 5xx Server Errors
- 500 Internal Server Error
- 501 Not Implemented
- 502 Bad Gateway
- 503 Service Unavailable
- 504 Gateway Timeout
- 505 HTTP Version Not Supported
- 506 Variant Also Negotiates
- 507 Insufficient Storage
- 508 Loop Detected
- 510 Not Extended
- 511 Network Authentication Required

## 🎨 Design Inspiration

This project takes inspiration from subway/metro maps found in major cities, using:
- Clean geometric lines
- Color-coded routes
- Station markers for individual status codes
- Creative naming for intersections and areas

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add missing status codes
- Improve the visual design
- Enhance interactivity
- Fix bugs or improve performance

## 📄 License

This project is open source. Please check the repository for license details.

## 🔗 Links

- [Live Demo](https://david.aparicio.eu) 
- [Author's Website](https://david.aparicio.eu)

---

*Making HTTP status codes as easy to navigate as your daily commute!* 🚇