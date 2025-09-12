import { addFilter } from '@wordpress/hooks';

// Apply responsive classes to blocks in frontend and editor.
const applyExtraClass = (extraProps, blockType, attributes) => {
	const { hideXS, hideSM, hideMD, hideLG, hideXL, hideXXL } = attributes;
	let classes = '';

	if (hideXS) classes += ' bvs-hide-xs';
	if (hideSM) classes += ' bvs-hide-sm';
	if (hideMD) classes += ' bvs-hide-md';
	if (hideLG) classes += ' bvs-hide-lg';
	if (hideXL) classes += ' bvs-hide-xl';
	if (hideXXL) classes += ' bvs-hide-xxl';

	if (classes) {
		extraProps.className = `${extraProps.className || ''} ${classes}`.trim();
	}

	return extraProps;
};

addFilter(
	'blocks.getSaveContent.extraProps',
	'bvs/apply-extra-class',
	applyExtraClass
);