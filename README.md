# Frontend Mentor - Order summary card solution

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

"Your challenge is to build out this order summary card component and get it looking as close to the design as possible. Users should be able to see hover states for interactive elements."

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- Tailwind, GitHub CodePilot, Vercel, Google Fonts

## My process

1. Decide I want to do web development again.
2. Choose Tailwind as I haven't done that before and was a little sus about it
3. Do the following:

```
npm install -D tailwindcss
npx tailwindcss init
npx tailwindcss -i ./input.css -o ./output.css --watch
```

4. Set up prettier, prettier w/ tailwind, and run Live Server inside of VS Code
5. ...
6. Profit!

### What I learned

> @workspace how would you refactor index.html?

That is kinda cool. I had a <diag> HTML tag and said I should replace with a standard one. It was nice cuz my ADHD brain wants this to get over with and it's another point of contact keeping me honest

- IF YOU ARE LEARNING TAILWIND ON A STATIC SITE, DON'T FORGET THAT TAILWIND STILL HAS TO BE COMPILED. They tell you how to do this in the docs: `npx tailwindcss -i ./input.css -o ./output.css --watch`.  if you don't do this you'll get intermittant errors as some things will work perfeclt fine but other things won't render w/o explnaation.

- VS Code can whine that `@tailwind` isn't a recognized directive. You can Google. Laziness told me turn off all warnings for unknown directives inside of VS Code

- I could have really picking try to match it to its exact web colors, it was just easier to give ChatGPT a web code and ask what the close tailwind CSS class is. It's just as well as I had eyeballed it as blue-600, it was reallly indigo-700. But I wanted to try custom colors too, which I had to tweak tailwnd.config.js. 

- I got these comps from FrontendMentor. They're design pattern libraries - their grids, their color patterns, etc.  aren't going to be aligned to Tailwinds, which is to be expected I guess. Tailwind is probably a lot better for the developer who has to be his own designer and has the ability to have a UI to work from such as shadcn


### Continued development

I'd probably focus on making sure this was more pixel perfect. But honestly, I got what I need given the timeframe I had.

### Useful resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind Cheat Sheet](https://umeshmk.github.io/Tailwindcss-cheatsheet/)
- [GitHub Copilot](https://copilot.github.com)

## Author

- Frontend Mentor - [@ErnieAtLYD](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@ErnieAtLYD](https://www.twitter.com/ErnieAtLYD)


