import fs from 'node:fs';

import stylelint from 'stylelint';
import {
	beforeEach,
	describe,
	expect,
	it,
} from 'vitest';

import config from '../index.js';

describe('flags no warnings with valid css', () => {
	const validCss = fs.readFileSync('./tests/valid.css', 'utf8');
	let result;

	beforeEach(async () => {
		result = await stylelint.lint({
			code: validCss,
			config,
		});
	});

	it('did not error', () => {
		expect(result.errored).toBe(false);
	});

	it('flags no warnings', () => {
		expect(result.results[0].warnings).toHaveLength(0);
	});
});

// TODO: extend this test to cover all rules
describe('flags warnings with invalid css', () => {
	const invalidCss = fs.readFileSync('./tests/invalid.css', 'utf8');
	let result: stylelint.LinterResult;

	beforeEach(async () => {
		result = await stylelint.lint({
			code: invalidCss,
			config,
		});
	});

	it('did error', () => {
		expect(result.errored).toBe(true);
	});

	it('flagged warnings', () => {
		expect(result.results[0].warnings).toHaveLength(2);
	});

	it('correct rule flagged', () => {
		expect(result.results[0].warnings.map(warning => warning.rule)).toEqual([
			'@stylistic/block-opening-brace-space-before',
			'@stylistic/indentation',
		]);
	});

	it('correct severity flagged', () => {
		expect(result.results[0].warnings[0].severity).toBe('error');
	});

	it('correct line number', () => {
		expect(result.results[0].warnings[0].line).toBe(1);
	});

	it('correct column number', () => {
		expect(result.results[0].warnings[0].column).toBe(4);
	});
});
