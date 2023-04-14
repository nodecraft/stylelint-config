'use strict';

module.exports = {
	'extends': [
		'stylelint-config-standard',
		'stylelint-stylistic/config',
	],
	'plugins': [
		'stylelint-stylistic',
	],
	'rules': {
		'at-rule-no-unknown': [true, {
			'ignoreAtRules': [
				'import-normalize', // postcss-normalize
				'each', // postcss-each
				'layer', // tailwindcss
				'screen', // tailwindcss
			],
		}],
		'at-rule-no-vendor-prefix': true,
		'comment-empty-line-before': null,
		'custom-property-empty-line-before': 'never',
		'media-feature-name-no-vendor-prefix': true,
		'media-feature-name-no-unknown': [true, {
			'ignoreMediaFeatureNames': [
				'prefers-reduced-motion',
			],
		}],
		'no-descending-specificity': null,
		'property-no-vendor-prefix': true,
		'selector-no-vendor-prefix': true,
		'selector-pseudo-class-no-unknown': [true, {
			'ignorePseudoClasses': [
				'increment',
				'decrement',
				'vertical',
				'horizontal',
				'start',
				'end',
				'deep',
			],
		}],
		'value-no-vendor-prefix': true,

		'stylistic/indentation': 'tab',
		'stylistic/selector-list-comma-space-after': 'always-single-line',
	},
};
