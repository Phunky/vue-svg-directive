export default {
    install(Vue, opts) {
        Vue.directive('svg', {
            bind(el, { value }) {
                if (!value) {
                    return;
                }

                if (!opts.prefix) {
                    opts.prefix = '';
                }

                let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                let use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
                let sprite = `${opts.prefix}${value}`;
                let scope = null;

                for (let key in el.attributes) {
                    let attr = el.attributes[key].name;

                    if (typeof attr === 'string' && attr.substr(0, 2) === '_v') {
                        scope = attr;
                    }
                }

                use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `${opts.sprites}#${sprite}`);
                use.setAttributeNS(null, scope, '');

                if (el.tagName !== 'svg') {
                    svg.setAttributeNS(null, scope, '');
                    if (opts.class) svg.classList.add(opts.class, sprite);
                    el.appendChild(svg);
                    el = svg;
                }

                if (opts.class) el.classList.add(opts.class, sprite);
                el.appendChild(use);
            }
        });
    }
};
