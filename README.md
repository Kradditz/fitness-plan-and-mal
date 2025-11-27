# FitJourney – Fitness & Meal Plan Website

FitJourney is a simple 6-page fitness site built with HTML5, CSS3, Skeleton CSS, and vanilla JavaScript.  
It provides workout examples, basic meal ideas, a BMI & calorie estimator, and a validated contact form.

## Pages

- `index.html` – Home / intro
- `plans.html` – Overview of Starter, Fat Loss, and Muscle Gain plans
- `workouts.html` – Sample home and gym workout templates
- `nutrition.html` – Meal ideas + interactive BMI & calorie estimator
- `testimonials.html` – Example success stories with lazy-loaded images
- `contact.html` – Contact form (name, email, address, telephone, message) with JavaScript validation

## Tech Stack

- HTML5 semantic structure
- CSS3 + [Skeleton CSS](https://getskeleton.com/) via CDN
- Custom styles in `css/style.css`
- JavaScript:
  - `js/main.js` – footer year, minor enhancements
  - `js/bmi.js` – BMI & calorie estimator logic
  - `js/form-validation.js` – client-side contact form validation

## Performance & CDN

The site is deployed to a static host using a global CDN (e.g. Netlify/GitHub Pages).  
Lighthouse (Chrome DevTools) was used to compare:

- Local version (served from the machine)
- Deployed CDN version (live URL)

Metrics compared:
- Performance score
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Total blocking time

## Accessibility & SEO

- Semantic HTML elements (`header`, `nav`, `main`, `section`, `footer`)
- Descriptive `<title>` and `<meta name="description">` per page
- Alt text on images
- Keyboard-friendly navigation
- `robots.txt` and `sitemap.xml` included for basic SEO support

## Folder Structure

- `/css` – `style.css`
- `/js` – `main.js`, `bmi.js`, `form-validation.js`
- `/img` – testimonial images
- `/media` – (reserved for future media)
- Root – HTML pages, `robots.txt`, `sitemap.xml`, `README.md`
