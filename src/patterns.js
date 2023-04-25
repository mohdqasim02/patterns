const star = function(width) {
  return "*".repeat(width);
};

const hollowLine = function(width) {
  return star(1) + " ".repeat(width - 2) + star(1);
};

const maxLength = function(list) {
  return list.reduce(function(maxWidth, line) {
    return maxWidth > line.length ? maxWidth : line.length;
  }, 0);
};

const leftPadding = function(pattern) {
  const width = maxLength(pattern);

  return pattern.map(function(line) {
    return line.padStart(width);
  });
};

const applyStyle = function(style, lineWidths) {
  return lineWidths.map(style);
};

const generatePattern = function(styles, lineWidths) {
  return styles.flatMap(function(style, index) {
    return applyStyle(style, lineWidths[index]);
  });
};

const leftAlignTriangle = function(style, lineWidths) {
  return leftPadding(generatePattern(style, lineWidths));
};

const diamond = function(style, lineWidths) {
  const leftPart = leftPadding(generatePattern(style, lineWidths));
  const rightPart = generatePattern(style, lineWidths);

  return leftPart.reduce(function(pattern, line, index) {
    return pattern.concat(line.slice(0, -1) + rightPart[index]);
  }, []);
};

exports.star = star;
exports.hollowLine = hollowLine;
exports.diamond = diamond;
exports.leftAlignTriangle = leftAlignTriangle;
exports.generatePattern = generatePattern;
