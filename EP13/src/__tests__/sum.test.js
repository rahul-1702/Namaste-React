import Sum from "../components/Sum"

test("Testing sum is 9 or not", () => {
    const result = Sum(5, 4);

    expect(result).toBe(9);
})