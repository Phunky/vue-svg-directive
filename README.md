# vue-svg-directive
VueJS directive to make using [SVG sprites](https://icomoon.io/app/) much simpler to use.

# Setup
```javascript
import svg from 'vue-svg-directive'
// ...
Vue.use(svg, {
  sprites: '/static/sprites.svg', // Path to your svg sprite
  prefix: 'icon-',  // The prefix all your icons have in your sprite (optional)
  class: 'icon' // This class will be applied to your <svg> elements
});
```

# Usage
The below will insert an ```<svg />``` within it's parent element

```html
<div v-svg sprite="home"></div>
```

While the below will just add the appropriate `<use>` into the `<svg>`

```html
<svg v-svg sprite="home"></svg>
```
