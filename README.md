---

## Table of Contents

- [Project Overview](#project-overview)
- [Challenge Overview](#challenge-overviw)
- [Challenge Details](#challenge-details)
- [Tech Stack](#tech-stack)
- [Usage](#usage)
- [Approach](#approach)
- [Future Enhancements](#future-enhancements)

# Project Overview: Urban Elgance - an E-commerce Website  

This e-commerce website project was developed as part of the TotalityCorp Frontend Challenge. It is an intermediate-level e-commerce site **Urban Elegance** built using [React](https://reactjs.org/) and [Tailwind CSS](https://tailwindcss.com/).

## Challenge Overview

Develop an intermediate-level e-commerce website using React or a similar frontend framework/library. The website replicates a shopping site with essential features, including product listing, cart management, and checkout. This challenge combines coding, UI design, logical thinking, user interaction, and critical problem-solving.

## Challenge Details

### Product Listing

- Display a variety of products with images, names, prices, and "Add to Cart" buttons.
- Implement filters to allow users to sort products by category, price range, or ratings.

### Shopping Cart

- Implement a cart section to display the added products, quantities, and total cost.
- Allow users to increase, decrease, or remove items from the cart.
- Display real-time updates of the cart total and item count.

### Checkout

- Implement a checkout process that calculates the total cost of items in the cart.
- Allow users to enter shipping information and payment details.

### Responsive Design

- Ensure the website is responsive and works seamlessly on both desktop and mobile devices.
- Optimize the layout for different screen sizes.


## Tech Stack

- **Frontend Framework**: React
- **UI Framework**: Tailwind CSS

- **Hosting**: Deployed on [Vercel](https://vercel.com/)

## Project Structure

- `/src`: Contains the React application source code.
- `/public`: Contains static assets - images and the HTML template.

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/SrushtiHaryan/totalitycorp-frontend-challenge.git
   ```

2. Install dependencies:

   ```bash
   cd totalitycorp-frontend-challenge
   npm install
   ```

3. Run the development server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the website.

## Approach
📱 I began this project with a "mobile-first" approach, prioritizing the design and functionality for smaller screens, 
which later scaled up seamlessly to larger devices. This decision proved to be effective in ensuring a responsive user experience.

🚀 The development process kicked off with the creation of the website's core components. 
I started with the navbar, followed by the sidebar, product listing, cart, and checkout pages. 
Each component was designed and implemented step by step to ensure a smooth user flow.

🔍 One of the key milestones in this project was the implementation of filtering options. 
I allowed users to filter products by category, price range, and ratings. 
This phase challenged me to use conditional rendering effectively, a concept I had never implemented before but had only read about.

🛒 Cart management presented another exciting challenge. To allow users to interact with their cart items, 
I needed a way to pass data from child to parent components. This led me to explore and implement the Context API, 
which proved to be an excellent tool for managing and sharing state across the application. 
I added features like item increment, decrement, and real-time total cost updates, enhancing the user experience.

🎨 As I continued to refine the project, I also focused on improving the UI to create an appealing and user-friendly shopping environment.

💡 Throughout this journey, I learned a lot of things in a short time frame. 
I am genuinely grateful for the opportunity to work on this project and look forward to 
further developing and enhancing it to fulfill its potential.

🚀 I am enthusiastic and eager to continue working on this project, addressing any remaining aspects 
and exploring new opportunities for improvement.

## Future Enchancements

- User Authentication: I plan to implement user registration and login functionalities, allowing users to have personalized accounts and save their shopping preferences.
- Payment Integration: Integrating a secure payment gateway is a top priority with the help of Stripe payment gateway.
- Getting more product details: Clicking on the product card must open that product's page to know more about it
- Order History: Developing an order history feature will allow users to track their previous purchases and easily reorder items.
- Product Recommendations: Implementing product recommendation algorithms based on user browsing and purchase history can boost cross-selling and upselling opportunities.
- Backend Development: While this project focuses on the frontend, I look forward to building a robust backend to support features like inventory management and order processing.
- Automated Testing: Implementing comprehensive test suites to ensure the reliability and stability of the application, especially as new features are added (Selenium Automation).

## Acknowledgments

Special thanks to TotalityCorp for providing this challenging opportunity to showcase frontend development skills.

---

