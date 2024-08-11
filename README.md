# Application Overview

This cross-platform app is developed based on the design provided in [Figma](https://www.figma.com/design/b9Is7U4WRK0KpwoM3Bicpw/RN-Test-Task(08.08.2024)?node-id=0-1).

## Application Logic

The web application consists of 5 screens:

### 1. Home
- **Purpose**: This is the main and first screen where the user can choose to either log in or sign up.
- **Navigation**: The screen transitions within the app are handled using React Native navigators.

### 2. Register
- **Purpose**: If the user chooses to sign up, they are redirected to this screen.
- **Functionality**: 
  - The user is required to enter their first name, last name, and phone number.
  - These inputs are stored in the Redux `regSlice.tsx`.
  - The Redux state also includes an `allowed` boolean, which controls whether the user can press the button to proceed to the phone number confirmation screen.
  - The `allowed` state is set to `true` only if all three fields (name, last name, and phone number) are filled out.
  - The phone number must have a length of 15 characters, including spaces and the starting `+`. (Note: In real projects, you can easily extract the pure number digits from this format.)

### 3. Login
- **Purpose**: If the user chooses to log in, they are redirected to this screen.
- **Functionality**: 
  - The user is asked to enter their phone number, which is stored in the same variable used for the registration phone number.
  - The `allowed` state must be `true` to proceed.
  - There are no fields for the name and last name, so the `allowed` state is achieved by setting the Redux states for name and last name to a single whitespace using the `useEffect()` hook. This should not cause issues in real projects, as these fields are irrelevant for login.

### 4. Confirm Code
- **Purpose**: Regardless of whether the user chose to sign up or log in, they are redirected to this screen next.
- **Functionality**: 
  - On load, the user receives a mocked confirmation code, set to `222222` by default (displayed as a pop-up on phones).
  - When the user enters this code into the input field, the button becomes active, and the input field changes color.
  - Changing the `allowed` state also affects the color of the buttons on the previous screens.

### 5. Success
- **Purpose**: After successfully entering the confirmation code, the user is transferred to this final screen, which is not included in the original design.
- **Functionality**: 
  - The screen simply displays the message "Success! Go back to main screen."
  - It allows the user to restart the app, with all states reset to their initial values upon rendering this screen.
