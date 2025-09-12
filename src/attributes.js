import { addFilter } from '@wordpress/hooks';

// Add custom attributes to all blocks.
const addCustomAttributes = (settings) => {
	settings.attributes = Object.assign(settings.attributes, {
		hideXS: { type: 'boolean', default: false },
		hideSM: { type: 'boolean', default: false },
		hideMD: { type: 'boolean', default: false },
		hideLG: { type: 'boolean', default: false },
		hideXL: { type: 'boolean', default: false },
		hideXXL: { type: 'boolean', default: false },
	});
	return settings;
};

addFilter(
	'blocks.registerBlockType',
	'bvs/add-attributes',
	addCustomAttributes
);