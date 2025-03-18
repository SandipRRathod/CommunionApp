# Communion App

## Objective

Building a simple three-page AngularJS web app with the following pages:

- **Home Page** – Brief introduction about the Communion App.
- **Event Listing Page** – Users can view, filter, add, and delete events.
- **About Page** – Information about the purpose and mission of the app.

---

## Technologies Used

- AngularJS
- Bootstrap
- Material UI
- AOS (Animate On Scroll Library) for animations
- Bootstrap-icons (for icons)
- CSS Flexbox & Grid (for responsive layout)
- ngx-pagination (for Pagination)

---

## Features

### Page 1: Home Page (Landing Page)

- **Brief Description** (e.g., "Connecting people of all faiths through events and community support").
- **Header** with an App Name & navigation links (Home, Events, About).
- **Hero Section:**
  - Title: "Connecting People Across Faiths & Interests"
  - Short Description about the app’s purpose.
  - Call-to-Action (CTA) button: "Explore Events" → Redirects to Events Page.
  - **Animated Elements using AOS** for smooth scrolling effects.
  - **Responsive Design** to ensure a great user experience on all devices.

### Page 2: Event Listing Page

- **Display List of Events** (Title, Date, Location, Description).
- **Filter Events** by Category (e.g., Religious, Social, Charity).
- **Add New Events** via a simple form (Title, Date, Category).
- **Smooth animations for event cards using AOS.**
- **Pagination support** to manage a large number of events.
- **Events Can Be Deleted Easily with a Delete Button.**
- **Clicking on an Event Opens a Dialog Box** displaying full details with an option to delete the event.

### Page 3: About Page

- **Detailed Description** of the Communion App’s purpose and mission.
- **Information about the App** or inspiration behind the app.
- **Animated elements using AOS** for an engaging presentation.

---

## Deployment

The app is deployed on Vercel and can be accessed using the following URL:
[Communion App](https://communion-app-eta.vercel.app/)

---

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/communion-app.git
   cd communion-app
   ```
2. Ensure you have AngularJS included via CDN or a local copy.
3. Install dependencies if required:
   ```bash
   npm install
   ```
4. Run Command to start the development server:
   ```bash
   ng serve
   ```

---

## Usage

- Navigate between pages using the navigation bar.
- View events, filter by category, add, and delete events.
- Click on an event to view its full details in a dialog box, where it can also be deleted.
- Learn more about the Communion App on the About page.
- Enjoy smooth animations powered by AOS.
- Experience **fully responsive design** for both mobile and desktop users.

---

## Future Improvements

- Backend integration for persistent event storage.
- User authentication and profile management.
- More interactive animations for a better user experience.
- Dark mode support for better accessibility.
- Enhanced event details with image uploads and RSVP options.

---

