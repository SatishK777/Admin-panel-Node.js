# LogIn/SignUp Admin Panel
# Node.Js![Screenshot 2024-09-22 212844](https://github.com/user-attachments/assets/10347658-7645-46cd-8880-33ccb4f50569)
![Screenshot 2024-09-22 212806](https://github.com/user-attachments/assets/cf942d4b-8d31-4ac6-9a22-8fff985faea0)
![Screenshot 2024-09-22 212744](https://github.com/user-attachments/assets/63901126-f047-455e-9356-0812e62344ef)
![Screenshot 2024-09-22 212651](https://github.com/user-attachments/assets/64094f86-f5a7-455b-9831-9291d587b81d)


## Project Overview
This project is an admin panel that allows users to register, log in, and manage their profiles. Upon successful login, users are redirected to a dashboard displaying a personalized welcome message. The panel also includes a profile page where users can view their personal details.

## Technologies Used
- **Node.js**: Backend server
- **Express.js**: Web framework
- **EJS**: Templating engine for rendering views
- **MongoDB/Mongoose**: Database for storing user data
- **Cookie-Parser**: Handling cookies for session management
- **Body-Parser**: Parsing incoming request bodies
- **Bcrypt.js**: Encrypting user passwords for security

## Features
- User Registration with encrypted passwords using **bcrypt.js**
- User Login with session management using **cookies**
- Personalized dashboard with a dynamic welcome message based on the user's name
- Profile page displaying personal user details
- MongoDB database to store and manage user information

## Project Flow

1. **Registration Page**:
   - Users can register by providing an email, password, and other profile details.
   - Passwords are encrypted and stored in the database using **bcrypt.js**.

2. **Login Page**:
   - Users log in using their credentials (email and password).
   - Upon successful login, a session is created and managed through **cookies**.

3. **Dashboard Page**:
   - After logging in, users are redirected to a dashboard page that displays a personalized welcome message (e.g., "Welcome, [username]!").

4. **Profile Page**:
   - Users can access a profile page that shows their personal information, such as name, email, and any other details provided during registration.
