---

# SUPER simple RESTful API with React.js Frontend

## Project Overview

This project demonstrates how to build a simple RESTful API that returns JSON data for a list of items, accompanied by a frontend built with React.js. The project follows a **Node.js + Express** backend architecture to handle the API, and the frontend is developed with **React.js** for a clean user interface.

### Key Features:
- RESTful API with basic CRUD functionality
- Responsive UI built with React.js
- Fetch API to interact with the backend
- Styled with CSS/Tailwind (optional)

---

## Prerequisites

Ensure you have the following tools installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn** (for package management)
- **Git** (for version control)
- **React.js** (for frontend development)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/pakagronglb/rest-api-react.git
cd rest-api-react
```

### 2. Backend Setup (Node.js + Express)

#### 2.1. Initialize Node.js Project
```bash
cd backend
npm init -y
```

#### 2.2. Install Dependencies
```bash
npm install express mongoose cors dotenv
npm install nodemon --save-dev
```

#### 2.3. Create the Backend Files

Create a basic **Express server** inside `backend/server.js`:

```javascript
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const items = [
  { id: 1, name: 'Item 1', description: 'Description of Item 1' },
  { id: 2, name: 'Item 2', description: 'Description of Item 2' },
  { id: 3, name: 'Item 3', description: 'Description of Item 3' },
];

app.get('/api/items', (req, res) => {
  res.json(items);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

### 3. Frontend Setup (React.js)

#### 3.1. Initialize React Project
```bash
npx create-react-app frontend
cd frontend
```

#### 3.2. Fetch API from Backend

In `frontend/src/App.js`, modify the `App.js` to fetch data from the backend API:

```javascript
import React, { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/items')
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1>Items List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

---

## Running the Project

### 1. Start the Backend

In the `backend/` folder, run:

```bash
npm run dev
```

The backend will start on `http://localhost:5000`.

### 2. Start the Frontend

In the `frontend/` folder, run:

```bash
npm start
```

The React app will start on `http://localhost:3000`.

---

## Folder Structure

```bash
restful-api-react/
├── backend/
│   ├── server.js
│   ├── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   ├── package.json
└── README.md
```

---

## Future Improvements

- Implement CRUD operations for adding, updating, and deleting items.
- Add authentication using JWT (JSON Web Tokens).
- Deploy both backend (Heroku) and frontend (Netlify).

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

## Contact

If you have any questions, feel free to contact me at [pakagronglebel@gmail.com].

---

ps. This README gives an overview of the project setup, how to run it, and potential future improvements. You can modify the links and details to suit your specific project needs.
