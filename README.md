# Event Booking API

A RESTful API built with **Node.js**, **Express**, and **MongoDB** that allows users to register, login, browse events, and book event tickets. Authentication is handled via **JWT**, and bookings are linked to user accounts.

---

## 🧩 Features

- User registration & login (with JWT authentication)
- Secure routes for creating and booking events
- View all available events
- View authenticated user's bookings
- MongoDB for data persistence
- Built-in middleware for route protection

---

## 📁 Project Structure

```
event-booking-api/
├── controllers/
│   ├── authController.js
│   ├── bookingController.js
│   └── eventController.js
├── middleware/
│   └── auth.js
├── models/
│   ├── Booking.js
│   ├── Event.js
│   └── User.js
├── routes/
│   ├── auth.js
│   ├── bookings.js
│   └── events.js
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md
```

---

## 🚀 Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/event-booking-api.git
   cd event-booking-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Setup environment variables:**
   Create a `.env` file in the root directory and add:
   ```env
   MONGO_URI=mongodb://localhost:27017/event-booking
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the server:**
   ```bash
   npm start
   ```

   The server will start on `http://localhost:3000`

---

## 📡 API Endpoints

### Authentication
| Method | Endpoint             | Description         |
|--------|----------------------|---------------------|
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login and get token |

### Events
| Method | Endpoint       | Description            |
|--------|----------------|------------------------|
| GET    | `/api/events`  | Get list of all events |
| POST   | `/api/events`  | Create a new event *(requires auth)* |

### Bookings
| Method | Endpoint        | Description                        |
|--------|-----------------|------------------------------------|
| GET    | `/api/bookings` | Get bookings for authenticated user |
| POST   | `/api/bookings` | Book an event *(requires auth)*     |

---

## 🛡 Authentication

All routes (except login/register and fetching events) require a **JWT token** sent via the `Authorization` header:

```
Authorization: Bearer <token>
```

---

## 🧪 Example Usage with curl

**Register:**
```bash
curl -X POST http://localhost:3000/api/auth/register \
-H "Content-Type: application/json" \
-d '{"email":"user@example.com","password":"123456"}'
```

**Login:**
```bash
curl -X POST http://localhost:3000/api/auth/login \
-H "Content-Type: application/json" \
-d '{"email":"user@example.com","password":"123456"}'
```

---

## 🧰 Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- bcrypt

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## ✍️ Author

Created by [Your Name](https://github.com/your-username)

Feel free to contribute or suggest improvements!
