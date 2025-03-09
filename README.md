<!-- Steps To Follow For Login Flow  -->

🔹 Step 1: Create AuthContext.js
This file provides the authentication context, which we will use across the application.

📌 Purpose of AuthContext.js
Creates a React Context to manage authentication state.
Stores user info, access token, and refresh token.
Provides functions to login, logout, and refresh token.


🔹 Step 2: Create AuthProvider.jsx
This file will: ✅ Store authentication state (accessToken, refreshToken, user).
✅ Handle login by saving tokens in localStorage and updating the state.
✅ Handle logout by clearing tokens and redirecting to login.
✅ Provide an authentication context (AuthContext) to the whole app.



🟢 Step 3: Implement Login.js (User Authentication)
Now that we have the AuthProvider.jsx set up, we need a Login Page where users can enter their credentials and authenticate.

📌 Key Features of Login.js
Takes username and password from the user.
Calls the login function from AuthProvider to authenticate.
Redirects the user to the dashboard upon successful login.
Handles errors properly and displays feedback.

🟢 Step 4: Implement ProtectedRoute.js (Route Guard)
Now that we have login functionality, we need to restrict access to certain routes (like /dashboard).

If a user is not logged in, they should be redirected to the login page.

📌 Key Features of ProtectedRoute.js
Checks if the user is authenticated.
Redirects to the login page if not authenticated.
If authenticated, renders the requested page.

🟢 Step 5: Implement Dashboard.js (Protected Page)
Now that we have a protected route, let’s create the Dashboard page.

This page should:

Be accessible only if the user is logged in.
Display the user's information from context.
Allow the user to log out.
