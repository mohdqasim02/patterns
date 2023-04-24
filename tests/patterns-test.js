const testing = require("../lib/test-framework.js");
const format = require("../lib/format.js");
const patterns = require("../src/patterns.js");

const title = format.title;
const display = format.display;
const areEqual = testing.areEqual;
const assert = testing.assert;
const summary = testing.summary;

const star = patterns.star;
const diamond = patterns.diamond;
const leftAlignTriangle = patterns.leftAlignTriangle;
const hollowLine = patterns.hollowLine;
const generatePattern = patterns.applyStyleGroups;

const it = function(testName, funcName, testData) {
  assert(testName, funcName, testData);
};

const testPatterns = function() {
  it("should give solid rectangle when style and constant line widths are passed", "pattern()", {
    expected: ["****", "****", "****"],
    actual: generatePattern([star], [[4, 4, 4]])
  });

  it("should give left align triangle when style and ascending line widths and passed", "pattern()", {
    expected: ["*", "**", "***"],
    actual: generatePattern([star], [[1, 2, 3]])
  });

  it("should give left align inverted triangle when style and descending line widths and passed", "pattern()", {
    expected: ["***", "**", "*"],
    actual: generatePattern([star], [[3, 2, 1]])
  });

  it("should give right align triangle when style and ascending line widths and passed", "pattern()", {
    expected: ["  *", " **", "***"],
    actual: leftAlignTriangle([star], [[1, 2, 3]])
  });

  it("should give right align inverted triangle when style and ascending line widths and passed", "pattern()", {
    expected: ["***", " **", "  *"],
    actual: leftAlignTriangle([star], [[3, 2, 1]])
  });

  it("should give hollow rectangle when styles and widhts are provided", "pattern()", {
    expected: ["****", "*  *", "*  *",  "****"],
    actual: generatePattern([star, hollowLine, star], [[4], [4, 4], [4]])
  });

  it("should give diamond when styles and widhts are provided", "pattern()", {
    expected: ["  *", " ***", "*****",  " ***", "  *"],
    actual: diamond([star], [[1, 2, 3, 2, 1]])
  });
}

const test = function() {
  display(title("Testing patterns.js"));
  testPatterns();
  summary();
}

test();
