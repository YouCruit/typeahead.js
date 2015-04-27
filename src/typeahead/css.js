/*
 * typeahead.js
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2014 Twitter, Inc. and other contributors; Licensed MIT
 */

var css = (function() {
  'use strict';

  var css =  {
    wrapper: {
    },
    hint: {
    },
    input: {
    },
    inputWithNoHint: {
    },
    dropdown: {
    },
    suggestions: {
    },
    suggestion: {
    },
    suggestionChild: {
    },
    ltr: {
      left: '0',
      right: 'auto'
    },
    rtl: {
      left: 'auto',
      right:' 0'
    }
  };

  // ie specific styling
  if (_.isMsie()) {
     // ie6-8 (and 9?) doesn't fire hover and click events for elements with
     // transparent backgrounds, for a workaround, use 1x1 transparent gif
    _.mixin(css.input, {
      backgroundImage: 'url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)'
    });
  }

  // ie7 and under specific styling
  if (_.isMsie() && _.isMsie() <= 7) {
    // if someone can tell me why this is necessary to align
    // the hint with the query in ie7, i'll send you $5 - @JakeHarding
    _.mixin(css.input, { marginTop: '-1px' });
  }

  return css;
})();
