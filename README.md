# Vicky-Chats

A simple chat application built with Node.js, Express, MongoDB, and EJS. This project demonstrates basic CRUD operations for chat messages.

## Features
- View all chats
- Add a new chat
- Edit existing chats
- Delete chats

## Tech Stack
- Node.js
- Express.js
- MongoDB (with Mongoose)
- EJS (Embedded JavaScript Templates)

## Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/ItsVikasA/Vicky-Chats.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Vicky-Chats
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up your MongoDB connection string in a `.env` file (if required):
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

### Running the App
```sh
node index.js
```

The app will be available at `http://localhost:3000` by default.

## Folder Structure
```
├── index.js
├── init.js
├── models/
│   └── chat.js
├── public/
│   └── style.css
├── views/
│   ├── chats.ejs
│   ├── edit.ejs
│   ├── index.ejs
│   └── new.ejs
└── package.json
```

## License
This project is licensed under the MIT License.
