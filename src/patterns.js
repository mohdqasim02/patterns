const star = function(width) {
  return "*".repeat(width);
};

const hollowLine = function(width) {
  return star(1) + " ".repeat(width - 2) + star(1);
}

const maxLength = function(list) {
  return list.reduce(function(maxWidth, line) {
    return maxWidth > line.length ? maxWidth : line.length;
  }, 0);
}

const leftPadded = function(pattern) {
  const width = maxLength(pattern);

  return pattern.map(function(line) {
    return line.padStart(width);
  });
}

const applyStyle = function(style, lineWidths) {
  return lineWidths.map(style);
};

const applyStyleGroups = function(styles, lineWidths) {
  return styles.flatMap(function(style, index) {
    return applyStyle(style, lineWidths[index]);
  });
};

const leftAlignTriangle = function(style, lineWidths) {
  return leftPadded(applyStyleGroups(style, lineWidths));
};

const diamond = function(style, lineWidths) {
  const leftPart = leftPadded(applyStyleGroups(style, lineWidths));
  const rightPart = applyStyle(style[0], lineWidths[0].flatMap(function(element) { return element - 1; }));

  return leftPart.reduce(function(pattern, line, index) {
    return pattern.concat(line + rightPart[index]);
  }, []);
};

exports.star = star;
exports.hollowLine = hollowLine;
exports.diamond = diamond;
exports.leftAlignTriangle = leftAlignTriangle;
exports.applyStyleGroups = applyStyleGroups;
