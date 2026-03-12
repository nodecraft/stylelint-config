import typescript from '@nodecraft/eslint-config/typescript';
import vitest from '@vitest/eslint-plugin';

export default [
	...typescript,
	{
		files: ['tests/**/*.js'],
		plugins: {
			vitest,
		},
		rules: {
			...vitest.configs.recommended.rules,
		},
	},
];
