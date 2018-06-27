/* eslint-disable eqeqeq */

const autosize = require('autosize');
const autoSizeInput = require('autosize-input');

export default {
  bind(el) {
    const { tagName } = el;
    if (tagName == 'TEXTAREA') {
      autosize(el);
    } else if (tagName == 'INPUT' && el.type == 'text') {
      autoSizeInput(el);
    }
  },

  componentUpdated(el) {
    const { tagName } = el;
    if (tagName == 'TEXTAREA') {
      autosize.update(el);
    } else if (tagName == 'INPUT' && el.type == 'text') {
      autoSizeInput(el);
    }
  },

  unbind(el) {
    autosize.destroy(el);
  },
};
