```markdown
# Project Setup Guide

Follow these steps to set up the project:

1. **Clone the GitHub Repository:** 


2. **Navigate to the Frontend Folder:**
     ```bash
   cd frontend
   ```

3. **Install Frontend Dependencies:** 
   ```bash
   npm install
   ```

4. **Navigate to the Backend Folder:**
   ```bash
   cd ../backend
   ```

5. **Install Backend Dependencies:** 
   ```bash
   npm install
   ```

6. **Rename Environment File:**
   Rename `.env.example` file to `.env`.

7. **Configure Environment Variables:**
   Open the `.env` file and add the following configurations:
   - **App Port:** Specify the port on which the app should run.
   - **APP Frontend URL:** Mention the URL of your frontend app. By default, it is set to `http://localhost:3000`. Modify it if your port is different.
   - **Database Configurations:** Enter database configurations including host, port, database name, username, and password.

8. **Run Commands:**
   - For development:
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm run prod
     ```

9. **Update Backend URL in Frontend:**
   In the `frontend/Http/index.js` file, add the backend app URL. By default, the backend is set on port 5000, so the URL is `http://localhost:5000/api`. Modify the URL accordingly if you change the port.

Setup is completed. Happy coding!
```