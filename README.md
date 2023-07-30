# Rose Computer Website 

The Rose Computer website is a platform for building custom PCs by selecting various PC components and parts. Users can explore different categories of PC components, view featured products, and build their PCs using the PC Builder tool. The website is built using Next.js and implements both static site generation (SSG) and server-side rendering (SSR) for better performance and user experience. Additionally, user authentication is enabled through NextAuth with social login providers (Google/Github).

# Live link 
https://assignment-6-computershop.vercel.app/

## Features

1. **Navbar**: The top navigation bar contains a "PC Builder" button that redirects the user to the PC Builder page. It also includes a "Categories" dropdown menu with different PC component categories, each having its corresponding route.

2. **Home Page (SSG)**: The home page displays six random featured PC components. Each featured product card shows essential information like image, product name, category, price, availability status, and rating. Users can click on any featured product to view its detailed information.

3. **Featured Category Sections (SSG)**: The home page includes six clickable featured categories. Clicking on any category redirects the user to a page displaying at least three products of that category. Each product card is clickable and leads to the product detail page.

4. **Product Detail Page (SSG)**: The product detail page showcases comprehensive information about each PC component. It includes product image, name, category, availability status, price, description, key features, individual rating, average rating, and user reviews.

5. **PC Builder Page (SSR)**: The PC Builder page allows users to select PC components for their custom build. Users can choose components from each category and add them to the PC Builder tool, which updates the state with the selected components. The Complete Build button becomes active only when the user adds at least 5-6 required components.

6. **Protected/Private Route (SSR)**: The PC Builder page is a protected route, accessible only to logged-in users. User authentication is enabled through NextAuth, and users can log in using their Google or Github accounts.

7. **Responsive Design**: The entire application is responsive, ensuring a seamless user experience across both mobile and desktop devices.

## Instructions to Run the Project

To run the PC Builder website on your local machine, follow these steps:

### Prerequisites

1. Node.js and npm should be installed on your system. You can download them from the official website: [Node.js](https://nodejs.org/)

### Installation

1. Clone the project repository to your local machine.

```bash
git clone https://github.com/moshiuzzaman/pc-builder.git
cd pc-builder
```

Install the required dependencies.
```bash
npm install
```

Configuration
Configure NextAuth for user authentication:


Create an account and obtain the API keys for Google and Github authentication.

Add the API keys to the .env.local file.

```bash
GOOGLE_CLIENT_ID=<your_google_client_id>
GOOGLE_CLIENT_SECRET=<your_google_client_secret>
GITHUB_CLIENT_ID=<your_github_client_id>
GITHUB_CLIENT_SECRET=<your_github_client_secret>
```
Running the Development Server

Run the following command to start the development server:

```bash
npm run dev
```
The PC Builder website should now be running locally at http://localhost:3000.
