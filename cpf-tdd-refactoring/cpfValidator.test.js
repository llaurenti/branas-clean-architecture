const cpfValidator = require('./cpfValidator');

const validCPFWithOnlyNumbers = '93541134780';
const validCPFWithMask = '935.411.347-80';
const cpfWithAllDigitsBeingRepeated = '111.111.111-11'
const invalidStillDontKnowWhy = '123.456.789-99'

test('Should return true given a valid CPF with only numbers', () => {
  expect(cpfValidator.validate(validCPFWithOnlyNumbers)).toBeTruthy();
});

test('Should return true given a valid CPF with a valid mask', () => {
  expect(cpfValidator.validate(validCPFWithMask)).toBeTruthy();
});

test('Should fail given null as CPF', () => {
  expect(cpfValidator.validate(null)).toBeFalsy();
});

test('Should fail given undefined as CPF', () => {
  expect(cpfValidator.validate()).toBeFalsy();
});

test('Should fail given letters as parameters', () => {
  expect(cpfValidator.validate('liroliroliro')).toBeFalsy();
});

test('Should fail given only numbers', () => {
  expect(cpfValidator.validate(42064947892)).toBeFalsy();
});

test('Should fail', () => {
  expect(cpfValidator.validate(invalidStillDontKnowWhy)).toBeFalsy();
});

test('Should fail given a CPF with the same digits', () => {
  expect(cpfValidator.validate(cpfWithAllDigitsBeingRepeated)).toBeFalsy();
});