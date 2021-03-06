const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent.nav["img-src"]);

/*
## Task 2: Create selectors to point your data into elements
  * [ ] Create selectors by using any of the DOM element's methods
  *
  * [ ] Use the IDs to update src path content // Note that IDs have been used on all images.
*/

// Selectors
const navItems = document.querySelectorAll('a');

const title = document.getElementById('title');


const cta = document.querySelectorAll('cta');

// class Selectors
const textContent = document.getElementsByClassName('text-content');

const topContent = document.getElementsByClassName('top-content');

const mainContent = document.getElementsByClassName('main-content');

const bottomContent = document.getElementsByClassName('bottom-content');

const cta = document.getElementsByClassName('cta');

const ctaText = document.getElementsByClassName('cta-text');

const contact = document.getElementsByClassName('contact');


// image Selectors by id
const ctaImg = document.getElementById('cta-img');

const logoImg = document.getElementById('logo-img');

const middleImg = document.getElementById('middle-img');

// tag Selectors
const header = document.getElementsByTagName('header');

const section = document.getElementsByTagName('section');

const div = document.getElementsByTagName('div');

const footer = document.getElementsByTagName('footer');

const links = document.getElementsByTagName('link');

const h1 = document.getElementsByTagName('h4');

const h1 = document.getElementsByTagName('h4');

const p = document.getElementsByTagName('p');
