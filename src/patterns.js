const star = function(width) {
  return "*".repeat(width);
};

const hollowLine = function(width) {
  return star(1) + " ".repeat(width - 2) + star(1);
}

const applyStyle = function(style, lineWidths) {
  return lineWidths.map(style);
};

const applyStyleGroups = function(styles, lineWidths) {
  return styles.flatMap(function(style, index) {
    return applyStyle(style, lineWidths[index]);
  });
};

exports.star = star;
exports.hollowLine = hollowLine;
exports.applyStyleGroups = applyStyleGroups;
