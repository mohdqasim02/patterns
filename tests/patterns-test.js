const testing = require("../lib/test-framework.js");
const format = require("../lib/format.js");
const patterns = require("../src/patterns.js");

const title = format.title;
const display = format.display;
const areEqual = testing.areEqual;
const assert = testing.assert;
const summary = testing.summary;

const stars = patterns.stars;
const diamond = patterns.diamond;
const leftAlignTriangle = patterns.leftAlignTriangle;
const hollowLine = patterns.hollowLine;
const generatePattern = patterns.generatePattern;

const it = function(testName, funcName, testData) {
  assert(testName, funcName, testData);
};

const testPatterns = function() {
  it("should give solid rectangle when style and constant line widths are passed", "pattern()", {
    expected: ["****", "****", "****"],
    actual: generatePattern([stars], [[4, 4, 4]])
  });

  it("should give left align triangle when style and ascending line widths and passed", "pattern()", {
    expected: ["*", "**", "***"],
    actual: generatePattern([stars], [[1, 2, 3]])
  });

  it("should give left align inverted triangle when style and descending line widths and passed", "pattern()", {
    expected: ["***", "**", "*"],
    actual: generatePattern([stars], [[3, 2, 1]])
  });

  it("should give right align triangle when style and ascending line widths and passed", "pattern()", {
    expected: ["  *", " **", "***"],
    actual: leftAlignTriangle([stars], [[1, 2, 3]])
  });

  it("should give right align inverted triangle when style and ascending line widths and passed", "pattern()", {
    expected: ["***", " **", "  *"],
    actual: leftAlignTriangle([stars], [[3, 2, 1]])
  });

  it("should give hollow rectangle when styles and widhts are provided", "pattern()", {
    expected: ["****", "*  *", "*  *",  "****"],
    actual: generatePattern([stars, hollowLine, stars], [[4], [4, 4], [4]])
  });

  it("should give diamond when styles and widhts are provided", "pattern()", {
    expected: ["  *  ", " *** ", "*****",  " *** ", "  *  "],
    actual: diamond([stars], [[1, 3, 5, 3, 1]])
  });

  it("should give hollow diamond when styles and widhts are provided", "pattern()", {
    expected: ["  *  ", " * * ", "*   *",  " * * ", "  *  "],
    actual: diamond([stars, hollowLine, stars], [[1], [3, 5, 3], [1]])
  });
}

const test = function() {
  display(title("Testing patterns.js"));
  testPatterns();
  summary();
}

test();
