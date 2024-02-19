# Dropbox App

## Introduction
This is a Dropbox-like application built using Next.js, Tailwind CSS, TypeScript, Firebase, and various libraries for enhanced functionality.


## Technology and Framework
- **Next.js 14:** Utilized for server-side rendering and improved performance.
- **Tailwind CSS:** Used for rapid UI development and styling.
- **TypeScript:** Implemented for static typing and enhanced codebase reliability.
- **Firebase:** Integrated for authentication, Firestore database, and storage functionalities.
- **Shadcn:** Employed for UI theming and enhanced styling capabilities.

## Features
- **Routes Added with Dashboard Page:** Routing has been configured with the dashboard page.
- **Clear Authentication for Signup and Login:** Integrated Clear (Cleark) authentication for secure signup and login functionalities.
- **Clear Installation Added to Layout:** Clear installation instructions have been added to the layout for easier setup.
- **Theme Toggle with Shadcn:** Integrated Shadcn for toggling themes and provided support within the layout.
- **Home Page Build:** The home page has been developed to provide a user-friendly landing interface.
- **Dropzone Library Installed:** Utilized Dropzone library for efficient file uploading.
- **Firebase App Setup:**
    - Firebase Firestore Database Setup
    - Firebase Storage Configuration
    - Registered App in Firebase Console to obtain necessary credentials.
- **Firebase Installation:**
    - Created firebase.ts for Firebase configuration.
    - Implemented file upload logic using Firebase Storage.
- **Table Implementation:**
    - Typing for enhanced codebase clarity.
    - Dashboard table setup.
    - Table wrapper component creation.
    - Defined table columns for structured data display.
    - Integrated Shadcn UI library for table styling.
    - Installed @tanstack/react-table for table functionalities.
    - Added npm packages for additional features:
        - `pretty-bytes` for formatting file sizes.
        - `react-file-icon` for displaying file icons.
        - `react-firebase-hooks` for Firebase integration.
        - `zustand` for state management.
        - `react-hot-toast` for displaying toast notifications.

## Usage
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Ensure Firebase setup is completed and credentials are placed in `firebase.ts`.
4. Run the application using `npm run dev`.

## Deployed Link
The application is deployed on Vercel. [Click here](https://dropbox-app-woad.vercel.app/) to access the deployed version.

## Contributions
Contributions are welcome! Feel free to submit pull requests for any improvements or features.
