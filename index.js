export default {
  install (Vue, opts) {
    Vue.directive('svg', {
      params: ['sprite'],

      bind () {
        let svg    = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
            use    = document.createElementNS('http://www.w3.org/2000/svg', 'use'),
            sprite = `${opts.prefix}${this.params.sprite}`,
            scope  = null,
            el     = this.el


        for (let key in el.attributes) {
          let attr = el.attributes[key].name
          if( typeof attr === 'string' && attr.substr(0,2) === '_v' ) scope = attr
        }

        use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `${opts.sprites}#${sprite}`)
        use.setAttributeNS(null, scope, '')

        if( el.tagName !== 'svg' ) {
          svg.setAttributeNS(null, scope, '')
          svg.classList.add(opts.class, sprite)
          el.appendChild(svg)
          el = svg;
        }

        el.classList.add(opts.class, sprite)
        el.appendChild(use)
      },

    })
  }
}
