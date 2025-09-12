import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

// Add visibility controls in the block inspector.
const withInspectorControls = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		const { attributes, setAttributes } = props;
		const { hideXS, hideSM, hideMD, hideLG, hideXL, hideXXL } = attributes;

		return (
			<Fragment>
				<BlockEdit {...props} />
				<InspectorControls>
					<PanelBody icon="welcome-view-site"  title={__("Visibility Control", "block-visibility-scope")} initialOpen={true}>
						<ToggleControl
							label={__("Hide on Extra Small ( <576px - small phones )", "block-visibility-scope")}
							checked={hideXS}
							onChange={(value) => setAttributes({ hideXS: value })}
						/>
						<ToggleControl
							label={__("Hide on Small ( 576px-767px - large phones )", "block-visibility-scope")}
							checked={hideSM}
							onChange={(value) => setAttributes({ hideSM: value })}
						/>
						<ToggleControl
							label={__("Hide on Medium ( 768px-991px - tablets )", "block-visibility-scope")}
							checked={hideMD}
							onChange={(value) => setAttributes({ hideMD: value })}
						/>
						<ToggleControl
							label={__("Hide on Large ( 992px-1199px - laptops )", "block-visibility-scope")}
							checked={hideLG}
							onChange={(value) => setAttributes({ hideLG: value })}
						/>
						<ToggleControl
							label={__("Hide on Extra Large ( 1200px-1399px - desktops )", "block-visibility-scope")}
							checked={hideXL}
							onChange={(value) => setAttributes({ hideXL: value })}
						/>
						<ToggleControl
							label={__("Hide on XXL ( ≥1400px - wide screens )", "block-visibility-scope")}
							checked={hideXXL}
							onChange={(value) => setAttributes({ hideXXL: value })}
						/>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	};
}, 'withInspectorControls');

addFilter(
	'editor.BlockEdit', 
	'bvs/with-inspector-controls', 
	withInspectorControls
);