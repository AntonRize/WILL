-----

## Instructions for LLM Assistants: How to Work with My Website

**Objective:** To correctly modify or create pages for my Jekyll-based website hosted on GitHub Pages.

**Critical Note:** My website uses a **highly customized setup**. Standard Markdown solutions or default Jekyll conventions **will not work**. You must follow the specific rules outlined below. Before providing any code, analyze the existing structure in files like `_layouts/default.html` and other pages to understand the established patterns.

### 1\. Page Content is Written in HTML, Not Markdown

All page content, even within `.md` files, must be written using **raw HTML tags**. Do not use Markdown syntax.

  * **Incorrect:** `## This is a heading`

  * **Correct:** `<h2 style="...">This is a heading</h2>`

  * **Incorrect:** `- List item`

  * **Correct:** `<ul><li>List item</li></ul>`

  * **Incorrect:** `**Bold text**`

  * **Correct:** `<strong>Bold text</strong>`

### 2\. LaTeX Equations Must Use Specific Delimiters

My website uses MathJax, which is already configured in the main layout file (`_layouts/default.html`). To ensure formulas render correctly, you must use the following delimiter for all inline equations:

  * **Required Delimiter:** `\( ... \)`
  * **Example:** `\(\kappa^2 = 2\beta^2\)`

**Do not use** single (`$`) or double (`$$`) dollar sign delimiters, as they conflict with the site's HTML structure and will fail to render.

### 3\. All Internal Links Must Use `site.baseurl`

To ensure links are portable and work correctly, all internal links must be prepended with the Jekyll `{{ site.baseurl }}` variable.

  * **Incorrect:** `<a href="/WILL/calculator/">Calculator</a>`
  * **Incorrect:** `<a href="/calculator/">Calculator</a>`
  * **Correct:** `<a href="{{ site.baseurl }}/calculator/">Calculator</a>`

### 4\. Styling is Done with HTML Attributes and CSS

Styling is handled directly within the HTML using Tailwind CSS classes and `<style>` attributes. When adding new elements, mimic the styling of existing elements on the page or in the `_layouts/default.html` file.

### Summary Example

**To create a section with a heading, a paragraph, and a formula, you must do it this way:**

```html
<div class="my-section-style">
    <h3 style="font-size: 1.5em;">My New Section</h3>
    <p>
        This section explains the key relationship between the projection parameters, 
        which is given by the formula \(\kappa^2 = 2\beta^2\).
    </p>
</div>
```

By following these four rules precisely, you will be able to provide helpful and correct assistance.