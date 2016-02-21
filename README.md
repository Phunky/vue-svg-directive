# vue-svg
VueJS directive to make using [SVG sprites](https://icomoon.io/app/) much simpler to use.

# Setup
```
import svg from 'vue-svg'
...
Vue.use(svg, {
  sprites : '/static/sprites.svg',
  prefix  : 'icon-',
  class   : 'icon'
})
```

# Usage
The below will insert an ```<svg />``` within it's parent element

```
<div v-svg sprite="home"></div>
```

While the below will just add the appropriate ```<use>``` into the ```<svg>```

```
<svg v-svg sprite="home"></svg>
```
