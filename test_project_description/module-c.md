# Module C - DineEase Showcase Website

### Understanding and implementing the DineEase's Vision:

You have already created an immersive and visually appealing showcase website for DineEase dining platform in the previous round. Since you performed that task under uncontrolled conditions and in a long timeframe, management wants to test whether you can produce work of similar quality under controlled conditions and time pressure. For this reason, you will need to create a simplified version of the site, complete with a new registration page.

You should ensure that the design of all subpages is visually aligned, creating a cohesive and harmonious user experience. You should follow the provided design file as much as possible. The design files, images, and text content can be found in the `assets` folder.

### Objective

Create a simplified version of the DineEase showcase website, focusing on cohesive design and user experience across all subpages. A significant addition to this module is the implementation of a new registration page for restaurants. You must strictly adhere to the provided design files, ensuring that the visual and thematic alignment of all elements reflects DineEase's vision.

### Assets

All necessary design files, images, and text content are available in the `assets` folder. You are expected to utilize these resources to ensure fidelity to the original design specifications.

## Subtasks

### Landing Page

Create a landing page that serves as the face of the DineEase platform, incorporating the following elements:

- **Header**: Includes the DineEase logo and a navigation menu.
- **Hero Section**: A captivating main banner that conveys the essence of DineEase.
- **Top Rated Restaurants Section**: Showcase a selection of top-rated restaurants with brief details.
- **Footer**: Contains site navigation links, social media links, and copyright information.

### Restaurant Registration Page

Develop a registration form for restaurant owners, guiding them through a three-step process to submit their establishment's details:

- **Step 1**: Personal Information
  - First Name
  - Last Name
  - Email Address
  - Password
  - "Continue" button to proceed to the second step
- **Step 2**: Select a plan
  - Display available plans
  - Required to select one
  - Add a switch to display monthly or yearly prices
  - "Continue" button to proceed to the next step
- **Step 3**: Restaurant Details
  - Restaurant Name
  - Cuisine
  - Country (select from the list - you can find `country-codes.json` in the assets)
  - ZIP code
  - City
  - Address
  - "x" button on each restaurant form to remove that restaurant
  - "Add new restaurant" button to give one more restaurant. (Make sure that this option is only available up to the maximum number of restaurants in the plan.)
  - "Sign Up" button to finish the registration process

If the user wants to navigate back to a previous page, they can do so by clicking on the number of the previous page.

Handle API errors on the last screen after clicking the Sign up button. Display the error message on the screen. (For example, an API error may be generated if you try to register twice with the same email address.)

## Design and User Experience

- The design of all subpages must be visually aligned to ensure a cohesive and harmonious user experience.
- Follow the design guidelines and elements provided in the `assets` folder meticulously.
- Prioritize responsiveness and accessibility to ensure the website is user-friendly across various devices and assistive technologies. Mobile breakpoint: 768px

## Evaluation Criteria

- **Adherence to Design**: Fidelity to the provided design files and effective implementation of the visual theme.
- **Functionality**: Smooth navigation between pages and flawless form submission process.
- **Creativity**: Innovative features or enhancements that improve user engagement without deviating from the design specifications.
- **Code Quality**: Clean, well-documented, and maintainable code.

Competitors are encouraged to showcase their ability to balance creativity with precision, producing a showcase website that exemplifies the DineEase dining platform's vision and values.
