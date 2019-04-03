describe("Bubble Sort", function() {
  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it("handles a single item", function() {
    expect(bubbleSort([1])).toEqual([1]);
  });
  it("handles two items", function() {
    expect(bubbleSort([5, 4])).toEqual([4, 5]);
  });
  it("handles multiple items", function() {
    expect(bubbleSort([3, 5, 6, 4])).toEqual([3, 4, 5, 6]);
  });
});
