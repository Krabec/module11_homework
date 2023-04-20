import { getMonth } from '../../units/getMonth.js';

describe('tests for getMonth function', () => {
	const cell = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
	for (let i = 1; i <= 12; i++) {
		it(`${i} month check`, () => {
			expect(getMonth(i)).toBe(cell[i - 1]);
		})
	}
	it('Invalid month check', () => {
		expect(getMonth(13)).toBe('неизвестно');
		expect(getMonth(0)).toBe('неизвестно');
		expect(getMonth(NaN)).toBe('неизвестно');
		expect(getMonth(undefined)).toBe('неизвестно');
		expect(getMonth('сентябрь')).toBe('неизвестно');
	})
	it('Fractional number month check', () => {
		expect(getMonth(10.7)).toBe('неизвестно');
	})
});
