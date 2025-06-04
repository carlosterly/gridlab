# Custom Instructions

## applyTo Patterns

To apply instructions to all SCSS, KIT, and HTML files, use the following in your configuration:

```
"applyTo": [
  "**/*.scss",
  "**/*.kit",
  "**/*.html"
]
```

## Project Overview

This project is a collection of CSS/SCSS grid and design experiments, with each page demonstrating different layout or visual techniques. The main entry point is `index.html`, and each design has its own HTML and corresponding CSS/SCSS files.

## Folder Structure

- `scss/` — Source SCSS files, organized by page/component.
- `css/` — Compiled CSS files, mirroring the SCSS structure.
- `pages/` — HTML files for each design.
- `framework/` — Shared SCSS/CSS framework files.

## Images

Images are not stored locally. All images are uploaded and manipulated via [Cloudinary](https://cloudinary.com/). Use Cloudinary URLs directly in your HTML and CSS.

## Workflow

1. **Edit SCSS files** in `scss/pages/` or `scss/framework/`.
2. **Compile SCSS to CSS**. Use your preferred tool (e.g., Prepros, Dart Sass, or a VS Code extension) to compile SCSS into the `css/` directory.
3. **Open the corresponding HTML file** in the `pages/` directory to view your changes in the browser.

## General Requirements

Use modern technologies as described below for all code suggestions. Prioritize clean, maintainable code with appropriate comments.

### Accessibility

- Ensure compliance with **WCAG 2.1** AA level minimum, AAA whenever feasible.
- Always suggest:
  - Labels for form fields.
  - Proper **ARIA** roles and attributes.
  - Adequate color contrast.
  - Alternative texts (`alt`, `aria-label`) for media elements.
  - Semantic HTML for clear structure.
  - Tools like **Lighthouse** for audits.

## Browser Compatibility

- Support latest two stable releases of major browsers:
  - Firefox, Chrome, Edge, Safari (macOS/iOS)

## HTML Requirements

- Use HTML5 semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<search>`, etc.).
- Include appropriate ARIA attributes for accessibility.
- Ensure valid markup that passes W3C validation.
- Use responsive design practices.
- Optimize images using modern formats (`WebP`, `AVIF`).
- Include `loading="lazy"` on images where applicable.
- Generate `srcset` and `sizes` attributes for responsive images when relevant.
- Prioritize SEO-friendly elements (`<title>`, `<meta description>`, Open Graph tags).

## CSS/SCSS Coding Standards

- Use modern CSS features including:

  - CSS Grid and Flexbox for layouts
  - CSS Custom Properties (variables)
  - CSS animations and transitions
  - Media queries for responsive design
  - Logical properties (`margin-inline`, `padding-block`, etc.)
  - Modern selectors (`:is()`, `:where()`, `:has()`)
  - Follow BEM or similar methodology for class naming
  - Use CSS nesting where appropriate
  - Include dark mode support with `prefers-color-scheme`
  - Prioritize modern, performant fonts and variable fonts for smaller file sizes
  - Use modern units (`rem`, `vh`, `vw`) instead of traditional pixels (`px`) for better responsiveness

- Use a linter (e.g., Stylelint) and code formatter (e.g., Prettier) for consistency.
- Follow BEM (Block Element Modifier) or similar methodology for class naming ([BEM guide](http://getbem.com/introduction/)).
- Use autoprefixing tools (e.g., PostCSS Autoprefixer) instead of manual vendor prefixes.
- Use 2 spaces for indentation for all CSS/SCSS files (avoid tabs).

- Use a logical order for CSS properties (e.g., Positioning → Box Model → Typography → Visual → Misc).
- Group media queries at the end of each rule or use a consistent approach.
- Use variables for colors, spacing, and typography (as you already do).
- Group related properties together (layout, box model, typography, etc.).
- Use nesting sparingly—avoid deep nesting to keep code readable.
- Prefer mixins and functions for reusable logic.
- Place custom mixins/functions in the `framework/` directory.
- Use 2 spaces for indentation.
- Use lowercase for all selectors and property names.
- Use hyphen-case for class names (e.g., `.jazz-poster-footer`).
- Use variables from `:root` for colors, spacing, and typography.
- Use the shared framework for mixins and functions.
- Prefer subgrid and modern CSS features where possible.
- Organize new designs by creating both a `.scss` and `.html` file with matching names.

### Comments

- Use comments to explain complex or non-obvious code.
- Document custom mixins and functions.

### Avoid !important

- Only use `!important` as a last resort.

## Adding a New Design

1. Create a new SCSS file in `scss/pages/`.
2. Compile it to `css/pages/`.
3. Create a new HTML file in `pages/` and link the compiled CSS.

## Tools

- [Prepros](https://prepros.io/) or another SCSS compiler is recommended.

## Notes

- Keep code modular and avoid duplicating styles.
- Use semantic HTML and accessible markup.
- Test layouts at different viewport sizes.
