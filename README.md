# RESTful API with React.js Frontend

This project demonstrates how to create a simple RESTful API with a Node.js + Express backend that serves JSON data, and a React.js frontend that displays the data in a modern, user-friendly UI with styled components.

## Features
- Node.js + Express server to handle backend API requests.
- RESTful API that returns JSON data for a list of items.
- React.js frontend to fetch and display the data from the API.
- Axios for making HTTP requests to the backend.
- Modern UI with styled components and hover effects.

---

## Getting Started

### Prerequisites

Ensure that you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- **Git** (for version control)

---

## Installation

### 1. Clone the Repository
First, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/restful-api-with-ui.git
cd restful-api-with-ui
```

### 2. Backend Setup (Node.js + Express)

#### 2.1. Install Backend Dependencies
Go to the backend folder and install the required Node.js dependencies:

```bash
cd backend
npm install express cors
```

#### 2.2. Run the Backend
Start the Node.js server:

```bash
node server.js
```

Your backend API will be running at `http://localhost:5000/api/items`.

---

### 3. Frontend Setup (React.js)

#### 3.1. Install Frontend Dependencies
Navigate to the frontend folder and install the necessary dependencies:

```bash
cd ../frontend
npm install axios
```

#### 3.2. Run the Frontend
Start the React.js application:

```bash
npm start
```

The React app will start at `http://localhost:3000` and fetch data from the backend API.

---

## Proxy Configuration (For Cross-Origin Requests)

To avoid CORS issues between the backend (port 5000) and the frontend (port 3000), you can configure a proxy. In `frontend/package.json`, add the following line:

```json
"proxy": "http://localhost:5000"
```

This allows the React app to make API requests to the backend seamlessly.

---

## Project Structure

```php
rest-api-with-ui/
├── backend/
│   ├── server.js         # Express server handling API requests
│   ├── package.json      # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── App.js        # React component fetching and displaying API data
│   │   ├── App.css       # Styling for the frontend UI
│   ├── public/
│   ├── package.json      # Frontend dependencies
└── README.md             # Project documentation
```

---

## Example API Response

The `/api/items` endpoint returns a list of items in JSON format:

```json
[
  { "id": 1, "name": "Item 1", "price": 10 },
  { "id": 2, "name": "Item 2", "price": 20 },
  { "id": 3, "name": "Item 3", "price": 30 }
]
```

---

## UI Design

The frontend features a modern design with:
- A responsive layout.
- Styled list items with borders, rounded corners, and hover effects for improved user interaction.

---

## Future Improvements

- Add CRUD (Create, Read, Update, Delete) operations for managing items.
- Implement user authentication (e.g., JWT).
- Deploy the backend (e.g., Heroku) and frontend (e.g., Netlify).

---

## License

This project is licensed under the [MIT License](LICENSE).


Feel free to modify the repository URL and your contact information as needed!

Preview

![image](https://github.com/user-attachments/assets/7c6e9ab5-cb46-4f76-a6b0-a0c774ff165e)
