# gatsby-plugin-styled-jsx-webpack-loader

Adds support for [styled-jsx] in [Gatsby] websites as a Webpack loader.

[styled-jsx]: https://github.com/zeit/styled-jsx
[gatsby]: https://www.gatsbyjs.org/

## Installation

Available as a pre-release for now:

```bash
# via yarn:
yarn add gatsby-plugin-styled-jsx-webpack-loader@next
# or via npm:
npm install --save gatsby-plugin-styled-jsx-webpack-loader@next
```

Update your gatsby config at `gatsby-config.js`:

```js
// gatsby-config.js
module.exports = {
  plugins: ['gatsby-plugin-styled-jsx-webpack-loader']
}
```

## Usage

This allows you to import `*.scoped.css` files as styled-jsx objects. See [_Styles in regular CSS files_](https://github.com/zeit/styled-jsx#styles-in-regular-css-files) from the styled-jsx documentation on more info on how this works.

```js
import style from './blog_post.scoped.css'

export const MyReactComponent = () => {
  return (
    <div class="my-react-component">
      Hello! This component will be styled via styled-jsx.
      <style jsx>{style}</style>
    </div>
  )
}
```

We use a `*.scoped.css` extension for interoperability with importing CSS files via `import './style.css'`.

## Advanced usage

- You can also import `*.global.css` files for "unscoped" styles.
- You can also import `*.resolve.css` for raw access to generated class names and styles via styled-jsx's [_resolve tag_](https://github.com/zeit/styled-jsx#the-resolve-tag).
