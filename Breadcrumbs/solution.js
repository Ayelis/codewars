/*
  Solution for "Breadcrumb Generator"
  CodeWars Link: https://www.codewars.com/kata/563fbac924106b8bf7000046

  Complexity Analysis:
  - Time Complexity: O(n) - Varies depending on URL
  - Space Complexity: O(n) - Varies depending on URL 
  Should be constant as URLs can never exceed a fixed size, in a perfect world.
*/

function generateBC(url, separator) {
  const ignoreWords = new Set(["the","of","in","from","by","with","and","or","for","to","at","a"]);

  // Extract path after the first single slash (ignoring protocol and domain)
  const path = url.replace(/^(https?:\/\/)?[^\/]+/, '') // Remove protocol + domain
                 .split(/[?#]/)[0]                     // Remove query/hash
                 .replace(/\/?index\.\w+$/i, '');       // Remove index files

  const segments = path.split('/')
                      .filter(seg => seg && !/^index\.?\w*$/i.test(seg));

  if (!segments.length) return '<span class="active">HOME</span>';

  return segments.reduce((acc, segment, index) => {
    const isLast = index === segments.length - 1;
    const href = `${acc.hrefPrefix}${segment}/`;
    const display = formatSegment(segment, ignoreWords);

    const crumb = isLast
      ? `<span class="active">${display}</span>`
      : `<a href="${href}">${display}</a>`;

    return {
      breadcrumbs: `${acc.breadcrumbs}${separator}${crumb}`,
      hrefPrefix: href
    };
  }, {
    breadcrumbs: '<a href="/">HOME</a>',
    hrefPrefix: '/'
  }).breadcrumbs;
}

function formatSegment(segment, ignoreWords) {
  const withoutExt = segment.replace(/\..+$/, '');          // Remove extension
  const words = withoutExt.split('-').filter(Boolean);      // Split hyphenated words

  if (withoutExt.length > 30) {
    return words
      .filter(word => !ignoreWords.has(word.toLowerCase()))
      .map(word => word[0].toUpperCase())
      .join('');
  }

  return words.join(' ').toUpperCase();
}