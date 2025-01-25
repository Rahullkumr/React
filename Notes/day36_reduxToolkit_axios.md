# 10 - Jan - 2025

- redux toolkit

- npm i axios

------------------

# 10 - Jan - 2025

> Axios Library Notes

## What is Axios?
Axios is a popular JavaScript library used to make HTTP requests from the browser or Node.js. It is a promise-based library, which makes it simple to handle asynchronous operations.

---

## Features of Axios
- **Promise-based**: Simplifies handling asynchronous requests.
- **Supports HTTP Methods**: GET, POST, PUT, DELETE, etc.
- **Works in the Browser and Node.js**: Allows making requests from client-side or server-side.
- **Automatic JSON Handling**: Parses JSON responses automatically.
- **Interceptors**: Provides hooks for request and response processing.
- **Cancel Requests**: Supports request cancellation.
- **Error Handling**: Provides robust error handling capabilities.

---

## Installation
### Using npm
```bash
npm install axios
```

### Using CDN
Add this in your HTML file:
```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

---

## Basic Usage
### Importing Axios
```javascript
import axios from 'axios';
```

### Making a GET Request
```javascript
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
```

### Making a POST Request
```javascript
axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'foo',
  body: 'bar',
  userId: 1,
})
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
```

---

## Common Axios Methods
| Method        | Description                   |
|---------------|-------------------------------|
| `axios.get`   | Retrieves data from a server. |
| `axios.post`  | Sends new data to the server. |
| `axios.put`   | Updates existing data.        |
| `axios.delete`| Deletes data from the server. |

---

## Configuring Axios Requests
### Adding Custom Headers
```javascript
axios.get('https://jsonplaceholder.typicode.com/posts', {
  headers: {
    'Authorization': 'Bearer your-token',
  },
})
  .then((response) => {
    console.log(response.data);
  });
```

### Setting a Base URL
```javascript
const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

apiClient.get('/posts')
  .then((response) => {
    console.log(response.data);
  });
```

---

## Error Handling
```javascript
axios.get('https://jsonplaceholder.typicode.com/invalid-url')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    if (error.response) {
      // Server responded with a status other than 200 range
      console.error('Error Response:', error.response);
    } else if (error.request) {
      // No response received
      console.error('Error Request:', error.request);
    } else {
      // Something else caused the error
      console.error('Error Message:', error.message);
    }
  });
```

---

## Additional Resources
- [Axios GitHub Repository](https://github.com/axios/axios)
- [Axios Documentation](https://axios-http.com)

---

Start using Axios to simplify your HTTP requests in React or other JavaScript projects!