# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

![image](https://user-images.githubusercontent.com/21281852/152071907-766369a3-9ca0-4345-a9b3-1a51363ddbca.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
1. Code the visual strucure
2. Add a dummy QR Code generator 
3. Add interacticity using Vue.js


### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Variables
- [Vue.js](https://nextjs.org/)

### What I learned

As someone who is coming from React, knowing that I could execute a function whenever a value changes that easily brings me joy. It really does!

I mean, take a look at this code:

```javascript
    watch: {
        link: function() {
            this.updateQrCode();
        }
    }
```

By the way, conditional tags are really handy. The code below only shows the share panel, then the variable `status.link_generated` is true.

```html
    <div class="share-box" v-if="status.link_generated">
        <div class="icon">
            <i class="fa fa-share-alt"></i>
        </div>
        <div class="content">
            <span class="link">{{ project_link }}</span>

            <a class="btn btn-outline btn-icon" v-on:click="copyLink">
                <i class="far fa-copy"></i>
                <span>Copy</span>
            </a>
        </div>
    </div>
```

### Continued development

**Share links with your QR Code**: this was an something I originally was planing on doing, but ditched it for legal reasons. I would store user data and therefore, would need a policy privacy page, comply with local and international laws. You got the idea.
> Definitely something I will tackle in a future iteration.

### Am I in love with Vue.js?

Maybe. I mean, not yet. We still are in the getting to know each other phase, you know? So far, so good. Not much to complain about. Great docs, good community.

### Useful resources

- [Reset CSS](https://meyerweb.com/eric/tools/css/reset/) - A way to remove most of the cross-browser predefined visuals.
- [qRious](https://github.com/neocotic/qrious) - The lib that generates the QR Code 'under the wood'.
- [Vue.js](https://vuejs.org/v2/guide/) -  A reactive JavaScript framework that allowed me to dynamically update the pages, as the user type.


## Author

- Website - [Nathanael Bonfim](https://nathanaelbonfim.com)
- Frontend Mentor - [@nathabonfim59](https://www.frontendmentor.io/profile/nathabonfim59)
- Twitter - [@nathabonfim59](https://www.twitter.com/nathabonfim59)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

