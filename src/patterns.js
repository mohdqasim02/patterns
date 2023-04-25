const stars = function(times) {
  return "*".repeat(times);
};

const hollowLine = function(width) {
  return stars(1) + " ".repeat(width - 2) + stars(1);
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

const padLeftRight = function(line, padding) {
  const width = line.length;
  return line.padStart(Math.floor(padding / 2) + width).padEnd(width + padding);
};

centerAlign = function(pattern) {
  const maxWidth = maxLength(pattern);

  return pattern.map(function(line) {
    const padding = maxWidth - line.length;
    return padLeftRight(line, padding);
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

const diamond = function(styles, lineWidths) {
  return centerAlign(generatePattern(styles, lineWidths));
};

exports.stars = stars;
exports.hollowLine = hollowLine;
exports.diamond = diamond;
exports.leftAlignTriangle = leftAlignTriangle;
exports.generatePattern = generatePattern;
