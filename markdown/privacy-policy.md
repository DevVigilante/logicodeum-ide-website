Last Updated: July 2026

## 1. Overview

Logicodium IDE is a development environment application that uses Google Sign-In and Firebase services to authenticate users and store minimal user-related data required for app functionality.
We respect your privacy and only collect the data necessary to provide core features.

## 2. Information We Collect

### 2.1 Authentication Data (Google Sign-In)

When you sign in using Google, we may access:

- Full Name (from Google account)
- Email Address
- Profile Photo URL
- Unique User ID (UID)
- Email verification status

This data is provided by Google Identity Services and Firebase Authentication.

### 2.2 Automatically Stored User Data (Firestore)

After login, we store limited user data in Firestore:

- uid (Firebase User ID)
- name
- photoUrl
- lastLogin timestamp

This is used only to manage user sessions and app personalization.

#### 2.3 Extensions Data

The app reads data from the Firestore collection:

- extensions

This is used to display available extensions inside the app. No personal data is stored in this collection by default.

## 3. How We Use Your Data

We use collected data to:

- Authenticate and manage user sessions
- Display user profile information inside the app
- Track last login time for session management
- Load and display available extensions
- Improve app functionality and user experience

## 4. Data Sharing

We do not sell, trade, or rent your personal data.
We only share data with:

- Google Firebase (Authentication + Firestore backend services)
- Google Identity Services (for login)

These services operate under Google’s privacy standards.

## 5. Data Retention

User data is stored in Firestore until the user deletes their account or data is manually removed.

Authentication data is managed by Firebase Authentication.

## 6. Data Deletion

Users cannot request deletion of their account data by contacting the developer.
But under few conditions, upon request:

- Firebase Auth user will be deleted
- No Firestore user document will be removed.

## 7. Security

We use Firebase security mechanisms to protect your data, including:

- Secure authentication tokens
- Firestore access rules
- HTTPS encryption

## 8. Third-Party Services

We use:

- Google Firebase Authentication
- Google Firestore Database
- Google Credential Manager (Google Sign-In)

Each service may collect data under its own privacy policy.

## 9. Children’s Privacy

This app is not intended for children under 13. We do not knowingly collect data from children.

## 10. Changes to This Policy

We may update this Privacy Policy periodically. Changes will be reflected in the app.
