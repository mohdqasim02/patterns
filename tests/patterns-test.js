const testing = require("../lib/test-framework.js");
const format = require("../lib/format.js");
const patterns = require("../src/patterns.js");

const title = format.title;
const display = format.display;
const areEqual = testing.areEqual;
const assert = testing.assert;
const summary = testing.summary;

const diamond = patterns.diamond;
const hollowDiamond = patterns.hollowDiamond;
const solidRectangle = patterns.solidRectangle;
const hollowRectangle = patterns.hollowRectangle;
const leftAlignedTriangle = patterns.leftAlignedTriangle;
const rightAlignedTriangle = patterns.rightAlignedTriangle;
const leftAlignedInvertedTriangle = patterns.leftAlignedInvertedTriangle;
const rightAlignedInvertedTriangle = patterns.rightAlignedInvertedTriangle;

const it = function(testName, funcName, testData) {
  assert(testName, funcName, testData);
};

const testPatterns = function() {
  it("should give solid rectangle when style and constant line widths are passed", "pattern()", {
    expected: ["****", "****", "****"],
    actual: solidRectangle(3, 4)
  });

  it("should give left align triangle when style and ascending line widths and passed", "pattern()", {
    expected: ["*", "**", "***"],
    actual: leftAlignedTriangle(3)  
  });

  it("should give left align inverted triangle when style and descending line widths and passed", "pattern()", {
    expected: ["***", "**", "*"],
    actual: leftAlignedInvertedTriangle(3)  
  });

  it("should give right align triangle when style and ascending line widths and passed", "pattern()", {
    expected: ["  *", " **", "***"],
    actual: rightAlignedTriangle(3)  
  });

  it("should give right align inverted triangle when style and ascending line widths and passed", "pattern()", {
    expected: ["***", " **", "  *"],
    actual: rightAlignedInvertedTriangle(3)  
  });

  it("should give hollow rectangle when styles and widhts are provided", "pattern()", {
    expected: ["****", "*  *", "*  *",  "****"],
    actual: hollowRectangle(4, 4)
  });

  it("should give diamond when styles and widhts are provided", "pattern()", {
    expected: ["  *  ", " *** ", "*****",  " *** ", "  *  "],
    actual: diamond(5)
  });

  it("should give hollow diamond when styles and widhts are provided", "pattern()", {
    expected: ["  *  ", " * * ", "*   *",  " * * ", "  *  "],
    actual: hollowDiamond(5)
  });

}

const test = function() {
  display(title("Testing patterns.js"));
  testPatterns();
  summary();
}

test();
