const getSolidWidths = function(rows, columns) {
  const widths = [];

  for(let index = 1; index <= rows; index++) {
    widths.push(columns);
  }

  return widths;
};

const getHollowWidths = function(rows, columns) {
  const widths = [];

  for(let index = 1; index <= rows - 2; index++) {
    widths.push(columns);
  }

  return [].concat([[columns]], [widths], [[columns]]);
};

const getTriangleWidths = function(rows) {
  const widths = [];

  for(let index = 1; index <= rows; index++) {
    widths.push(index);
  }

  return widths;
};

const getInvertedTriangleWidths = function(rows) {
  const widths = [];

  for(let index = 0; index < rows; index++) {
    widths.push(rows - index);
  }

  return widths;
};

const getDiamondWidths = function(rows) {
  const widths = [];

  for(let index = 1; index < rows; index += 2) {
    widths.push(index);
  }

  for(let index = rows; index > 0; index -= 2) {
    widths.push(index);
  }

  return widths;
};

const getHollowDiamondWidths = function(rows) {
  const widths = [];

  for(let index = 3; index < rows; index += 2) {
    widths.push(index);
  }

  for(let index = rows; index > 1; index -= 2) {
    widths.push(index);
  }

  return [].concat([[1]], [widths], [[1]]);
};

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

const centerAlign = function(pattern) {
  const maxWidth = maxLength(pattern);

  return pattern.map(function(line) {
    return padLeftRight(line, maxWidth - line.length);
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

const solidRectangle = function(rows, columns) {
  return applyStyle(stars, getSolidWidths(rows, columns));
};

const hollowRectangle = function(rows, columns) {
  return generatePattern([stars, hollowLine, stars], getHollowWidths(rows, columns));
};

const leftAlignedTriangle = function(rows) {
  return applyStyle(stars, getTriangleWidths(rows));
};

const leftAlignedInvertedTriangle = function(rows) {
  return applyStyle(stars, getInvertedTriangleWidths(rows));
};

const rightAlignedTriangle = function(rows) {
  return leftPadding(applyStyle(stars, getTriangleWidths(rows)));
};

const rightAlignedInvertedTriangle = function(rows) {
  return leftPadding(applyStyle(stars, getInvertedTriangleWidths(rows)));
};

const diamond = function(rows) {
  return centerAlign(applyStyle(stars, getDiamondWidths(rows)));
};

const hollowDiamond = function(rows) {
  return centerAlign(generatePattern([stars, hollowLine, stars], getHollowDiamondWidths(rows)));
};

exports.diamond = diamond;
exports.hollowDiamond = hollowDiamond;
exports.solidRectangle = solidRectangle;
exports.hollowRectangle = hollowRectangle;
exports.leftAlignedTriangle = leftAlignedTriangle;
exports.rightAlignedTriangle = rightAlignedTriangle;
exports.leftAlignedInvertedTriangle = leftAlignedInvertedTriangle;
exports.rightAlignedInvertedTriangle = rightAlignedInvertedTriangle;
