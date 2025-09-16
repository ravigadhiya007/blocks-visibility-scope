import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';

// Add class in editor when any toggle is active.
const withVisibilityIndicator = createHigherOrderComponent((BlockListBlock) => {
	return (props) => {
		const { attributes } = props;
		const { hideXS, hideSM, hideMD, hideLG, hideXL, hideXXL } = attributes;

		// Check if any visibility rule is applied.
		const hasVisibility =
			hideXS || hideSM || hideMD || hideLG || hideXL || hideXXL;
		
		// Add bg helper class.
		if (hasVisibility) {
			props.className = `${props.className || ''} bvs-has-visibility-rule`;
		}

		return <BlockListBlock {...props} />;
	};
}, 'withVisibilityIndicator');

addFilter(
	'editor.BlockListBlock',
	'bvs/with-visibility-indicator',
	withVisibilityIndicator
);