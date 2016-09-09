# Workshop Course
## Technologies Covered:
* HTML
* CSS
* Bootstrap
* Font Awesome
* Hover.css

# Introduction to Plain Text Editors
* Why do we need a plain text editor?
  * Talk about how websites are written as plain text/ASCII characters, and how word processors such as Microsoft Word are unsuitable as they tend to include proprietary formatting information (e.g. font size) which a web browser can't understand
* Installing a plain text editor
  * Walk through the installation for Sublime Text 3
  * https://www.sublimetext.com/3

# Introduction to Front-End Web
* What is HTML & CSS?
  * HTML is a markup language for websites, think of it as the _skeleton_ that keeps all the content structured in a meaningful &mdash; or _semantic_ &mdash; manner.
  * CSS stands for Cascading Style Sheets and is a language used in conjunction with HTML to add styling. Effectively, it is the 'skin' on the HTML skeleton that gives the content styling, colours, backgrounds, and positioning.
* Creating an HTML Document
  * Create a __website__ folder
  * Open Sublime Text 3 and save an index.html file
    * Explain why we use the name index.html (i.e. because most web servers look for a file called index.html by default to load as the site homepage)
  * ! [tab]
    * Explain `<!DOCTYPE html>`
      * Must be on line 1 of every HTML document, denotes an "HTML 5" document to the browser (the latest version of HTML), thus letting the browser know how to render the content and what to expect.
      * Explain the `<html lang="en">` element
      * Explain `<head> and <body>`
        * `<head>` stores metadata (information about information)
          * Talk about `<title>`
          * Talk about `<meta charset="utf-8">` (You just have to include it so the browser knows you're using English characters)
          * Talk about `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">` (Old version of the above tag, we still include it to support old browsers)
          * Talk about `<meta http-equiv="X-UA-Compatible" content="ie=edge">` (You have to include it for IE users)
          * Talk about `<meta name="author" content="_____">`
          * Talk about `<meta name="description" content="_____">`
        * <body> stores the actual content (what you see in the browser viewport)
* Explain header tags (`<h1>` to `<h6>`)
  * Explain their appropriate usage. `<h2>` doesn't mean a "smaller heading", it means "a second-level heading".
  * Emphasise that we DO NOT use HTML for styling, only CSS for that -- so don't use `<h2>` "because it's smaller".
  * Add the website `<h1>` and `<h2>` tags (yes it's too big, we'll use CSS to fix that later!)
* Explain the paragraph element.
  * Notice how entering new lines within a paragraph -- or even multiple spaces -- doesn't count?
    * HTML only recognises the first space. This is to keep the language _case-insensitive_, making it easy for developers to tab out their code however they like!
    * To create a new space, use the &nbsp; entity. There are many entities, a common one is &copy; to create copyright logo in footers.
    * To create a new line, use the `<br>` tag. This has no closing tag because it encapsulates no content, and is hence called a "void", "singleton", or "empty" tag.
# Introducing CSS into our HTML
* Things are looking plain so far, right? Explain how CSS will change that.
  * Create a new _css_ folder in the _website_ directory, and use the text editor to save a new style.css file
  * Back in the <head> section, explain the <link> tag and all its attributes.
    * Proper syntax is `<link rel="stylesheet" href="css/style.css" media="all">` (NOTE: `type="text/css"` is deprecated!).
    * _The `media` attribute is used to say the file should be applied to all devices, not just screens or printers etc._
  * Explain CSS background-color, color, font-size and font-family properties.
    * Be sure to explain the concept of fallback fonts (serif, sans-serif, fantasy, cursive, and monospace) and why we use them (i.e. not all users will have the same custom font installed. Windows users can't see Helvetica, so add `, serif`  after for cross-platform compatibility).
    * We use double quotes to wrap attribute values in HTML, but single quotes in CSS (which we use for >1 word font names e.g. `font-family: 'Comic Sans MS', cursive;`)
    * Change the `<h1>` color red and resize the font-size of `<h2>` to a smaller size.
    * Explain classes & ID's and create a `.greenText` class.

# Incorporating Bootstrap
* What is Boostrap, and why do we use it?
  * Bootstrap is a front-end CSS framework used to speed up development through features such as pre-styled buttons, and an amazing _grid system_ which lets our site work across browsers of all sizes and automatically adapt to look beautiful (this is called _responsive design_).
  * Bootstrap's grid has 12 columns. __Show a graphic of a grid e.g. [this one](http://www.nikibrown.com/designoblog/wp-content/uploads/2009/04/nyt-grid-structure.gif)
* Bootstrap CDN &amp; linking the boostrap CSS file to our HTML document
  * Dont forget to link the Bootstrap jQuery and JavaScript dependencies using the `<script>` element before the closing `</body>` tag. _This is best practice_
* Adding in the `<meta viewport="width=device-width, initial-scale=1.0">` tag (used to tell mobile browsers to expect a responsive site).
* Add in `<h2>About me</h2>`
* Add in `.text-center` to the `<h2>` demonstrate the effects of Bootstrap.
* Positioning content with Bootstrap columns
  * Hypothetical question: &ldquo;I'd like to be able to fit multiple of these paragraphs on one line, but only one column on mobile.&rdquo;
  * Answer: Create a `<div class="container">` & `<div class="row">` to create a new row, and add the `md-4 sm-6 xs-12` classes to the paragraphs to make the content snap at various breakpoints. _Demonstrate this by resizing the browser viewport._
* Add in Bootstrap's Jumbotron + fix css (i.e. demonstrate various HTML/CSS bugs which may prevent this from working, e.g. missing semicolons or incorrect class names).
* Teach how to hide content on specific browser sizes, demonstrate this by creating a bunch of new lines with `<br>` and hiding them with the `.hidden-xs` class.

# &ldquo;My projects&rdquo; section
* Add `<h3>` subheadings to each of the columns within _About me_.
* Create a new Bootstrap row  (`<div class="row">`) for the `<h2>My Projects</h2>` section.
* Add new `div`s with classes `xs12 sm6 md4`
  * Insert placeholder images from [placehold.it](http://placehold.it) with size 300 x 200 _(rounded)_.
  * Create a `.width-100` class with the properties `float: none; width: 100%;`
  * Create a `.padding-fix` class with the properties `padding: 0 20px 20px 20px`
    * Note that here we're using a __shorthand property__, the order is **T**op, **R**ight, **B**ottom, **L**eft.
      * _&ldquo;Remember **TRBL** and you'll stay out of **TR**ou**BL**e&rdquo;_

# Social media row
* Add font-awesome CDN after bootstrap, but before style.
  * **Explanation:** HTML is read sequentially (top to bottom, one line at a time). You can't load the fonts _after_ they are referenced in your custom CSS, it doesn't make sense!
* a [tab] em [tab] (Best practice: use `<em>` over `<i>` &amp; `<strong>` over `<b>`)
* add http:// url and fa fa-5x fa-facebook-square
* add the `target="blank"` attribute to open the page in a new tab.
* add class `.small_icon`
* add `<br> <br>`
* add `.sm-row` wrapper class
* add hover.css cdn
* add hvr-grow sm-icon a elements