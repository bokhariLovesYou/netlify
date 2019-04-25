## Netlify Analytics
A simple webpage which advertises Netlify Analytics. A tool which helps get site owners a deeper understanding of their customers and visitors.

## Problem
Netlify were to build a new product called Netlify Analytics. To successfully market that product, Netlify will need a product page to communicate the product’s virtues and convert visitors into sign-ups.

- Build a performant experience (Performance is one of the pillars of Netlify’s brand)
- Use React, Netlify and JAMstack technologies to build the experience
- Focus on user experience to ensure the page connects to the overall website
- Have an effective conversion flow for user sign-ups

## Solution

https://lucid-rosalind-dc4a94.netlify.com/

A web page which directly speaks to the user. Something a user can, on the intial page load, connect to and tell it's a product from Netlify. 

## Storytelling
The idea behind this product page was simple. To keep the originality and the aesthetics which Netlify provides to the web. I wanted to communicate to the user directly that this is a webpage from Netlify. Thus, the key focuses were:

a.) Performance<br>
b.) Branding<br>
c.) The Development Experience, which helps us to keep the page scalable, and development friendly.

- Section One<br>
The first section uses the 'fancy curves' which keeps the branding of the Company, so that the user can detect this page comes from Netlify without looking at the logo. Keeping Text on the left with a CTA so that it's approachable for users which come to the page for 'direct information'.

- Section Two<br>
Speaks about the core features of the product, letting the user know what they can achieve with it. Using the nicely designed SVGs from Netlify keeps the branding in place. A tighter wrapper with nested content helps us to maintain the attention of the user as they read on the benefits.

- Section Three<br>
introduces the curvy backgrounds again, where we introduce a small text block with the Docs, so that a user who wishes to research can easily find the information they were looking for. Next comes a testimonial, which can motivate the user to be transformed into a lead. <br><br>The spotlight on the right, starting from the very top of the section falls on the dummy screenshot of the web app. The idea was to 'intrigue' the user, and let them know that something 'fancy' or 'important' is at the bottom. This makes our product gain the importance. To the left of the screenshot, we talk more about the product and what it can achieve.

- Section Four<br>
The idea for this section was to use lesser words to create curiosity for the user, explaining what Netlify does is not done by another company, and how effectively they are changing the web for good. A curious user wants to learn more, which can convert them into a lead and eventually a customer.

- Section Five<br>
The main focus for this section was to tell the user about some of the other products as well. This section can help the user to learn more about the company, what it does, it features, and navigate through different areas of the site.

- Section Six<br> is the closing section of the page, introducing the Sign Up CTA back again. I didn't want an interested user to scroll back up in order to sign up for the app, and break the experience they were getting. This CTA, ideally, should be the one which should bring in conversions which have more value than the others. 

I kept the header, the footer, menu's toggler/modal as well as the search toggler/modal the same as Netlify's - as I wanted this page to look part of the same website. 

## JAMSTACK
The technologies used to build this page were JavaScript, React, Gatsby, GraphQL, Netlify. 

## Architecture
The development architecture was built keeping in mind that this page stays scalable as well as easier for the other developers to work on. The repo consists of a folder Src, which has different subfolders like pages, images, data and components. 

The components sub-folder has all the reusable components which makes this webpage scalable. It also has the stylesheet used for this webpage. I compiled the components used on this webpage into a single file called index.js and imported it as an object.

The images folder consists of the SVGs which are being imported time to time.

The pages consists of the webpages, currently a 404 as well as an index.js file which is the main page.

Data comes from the Yaml file which is inside the folder called 'data'

## Performance

The main focus for this page was to be performant efficient. That is why it was built using React and Gatsby, and hosted on Netlify. I wanted to lazyload the images, however I was unsure if I should as Netlify's website (to my knowledge) wasn't lazyloading images. Apart from that, the two images were scaled down to 60 to 70 kbs respectively. We could've had saved 20 kbs on each, however I didn't wish to pixelate an image and disrupt the experience the user could've had with the page.

## Conversion Flow

All the buttons on this product page are being tracked as custom events in Google Analytis which lets us collect data from the users and build effective strategies upon their behavior and interaction with this page. We are also tracking scroll events, in order to determine if a user clicks the very last CTA after they have fully scrolled the page. The Menu toggler as well as the search toggler tells us about users' interest to the company - therefore, we're tracking them as well. This webpage was built using Gatsby, which renders data on the server side, helping SEO.

https://i.imgur.com/DcSk6qV.png

## Summary
To summarize, this page aims to speak to the user 'as Netlify'. It wants to provide the user with an experience so that they feel as if they're directly communicating to the company. From the top to the bottom, I wished to provide an experience which is hard to get interrupted. 

Thank you so much for reading this,
Paras. 

--

## Production

Please View the website at https://lucid-rosalind-dc4a94.netlify.com/.

## GraphQL

Please Once up and running, explore the site's data and schema at <http://localhost:8000/___graphql>.