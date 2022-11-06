const calculateBonus = require("./debugg");
describe("Тестирование переменной calculateBonus", () => {
  it("Суммирование положительных чисел, равное ожидаемому числу", () => {
    expect(calculateBonus(1000, 1)).toBe(50);
  });
  it("Суммирование положительных чисел, равное ожидаемому числу", () => {
    expect(calculateBonus(20, 20)).toBe(50);
  });
});
