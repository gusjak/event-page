# Mikkeller Event Invitation

<img src="https://i.imgur.com/YsiROuX.gif"  width="50%">

## Mission

This is a school assignment in which the programs Web Developer and IP Graphical Production & Form at Yrgo are collaborating.
Our mission is to create an event invitation in both physical and digital form.
We get to choose ourselves for a real company or organisation and create either a fictitious or a recurring event.

We have decided to go with the microbrewery company Mikkeller and create a beer launching event.

<details><summary><strong>Project requirements:</strong></b></summary>

- A unique <strong><ins>landing page</ins></strong> that follows the same graphic manner of the chosen company.
- The website needs to be responsive and built mobile-first and follow the accessibility standard WCAG (https://a11yproject.com/checklist/).
- It must contain at least five animations, one of which is an in-animation when the page is first displayed.
- It should have a CTA where visitors can sign up via a form to the event. This form only needs to be shown visually.
- The landing page should be personalized via a link that can be sent out with query parameters. Suggestions for at least two ways to personify the site via the link such as name, country, pictures, occupational group, etc.
- The website should be built statically through HTML, CSS, and JavaScript.
- From day one, the website should be pushed up to a public repository on GitHub.
- The website should upload to a hosting service such as. Netlify, Vercel or GitHub Pages.
- The website should be optimized and have as high a score as possible on https://web.dev/ (optimize images, CSS and JS, tips are to use construction tools such as Parcel).
- Each group must submit a review of another group the day before the presentation. Code reviews must be submitted with a pull request.

</details>

## Installation

*Option 1*

Simply visit [Mikkeller Event Website](https://ipwu-event.netlify.app/) for a live preview.

<br>

*Option 2*

1. Clone this repository through the terminal: `git clone https://github.com/gusjak/event-page.git`.
2. Change your current directory to the repository: `cd event-page/`.
3. Install dependencies with `npm install` and when they are finished type `npm start` in your terminal.
4. The website will automatically build to your localhost, type `http://localhost:1234/` in your browser.


## Code Review

By [Dante Mogrim](https://github.com/mogrim-91)

- [ ] 1. **package.json:** Installing Prettier (or some other formatter/linter) through npm could be a good idea for future projects that may or may not be collaborations/open for contributions.
- [ ] 2. **index.html L49+L407:** Lazy loading consistency missing on two img tags.
- [ ] 3. **index.js L21:** Not a huge fan och the tab title toggle. Becomes a bit distracting for the eyes when having other tabs open at the same time. Cool idea though!
- [ ] 4. **index.html L457:** I feel like these would be clearer if they were filled with dummy data example values rather than a description of what type of information goes there.
- [ ] 5. **/img:** Your three .webp images might risk you running into some [browser coverage issues](https://caniuse.com/?search=webp). You can for example convert them into .png's and you'll be fine! :sunglasses:

> You really knocked it out of the park! I am sincerely blown away! <br>
> It was a toughie even finding anything to remark upon, haha. Job well done! :100: :tada:

## Creators

- [Jakob Gustafsson](https://github.com/gusjak) (WU)
- [Matilda Carlsdotter]() (IP)

## License

This project is licensed under the MIT License - see the **[LICENSE](https://github.com/gusjak/event-page/blob/main/LICENSE)** here.
