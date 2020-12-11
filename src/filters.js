import {addFilter} from '@wordpress/hooks';
import {Fragment} from '@wordpress/element';
import {InspectorAdvancedControls} from '@wordpress/block-editor';
import {createHigherOrderComponent} from '@wordpress/compose';
import {ToggleControl} from '@wordpress/components';

// Additional attributes for core/heading block
const filterBlocks = (settings, name) => {
	if (name !== 'core/heading')
		return settings;

	settings.attributes = Object.assign(settings.attributes, {
		isInToc: {
			type: 'boolean',
			default: true,
		},
		dynamicId: {
			type: 'boolean',
			default: true,
		},
		headingID: {
			type: 'string',
			source: 'attribute',
			attribute: 'id',
			selector: '*',
			default: '',
		},
	});
	return settings;
}
addFilter(
	'blocks.registerBlockType',
	'toc/additional-attributes',
	filterBlocks
);

// Toggle option for core/heading block: Include/Exclude from ToC
const isInTocControls = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		if (props.name !== 'core/heading')
			return <BlockEdit {...props} />

		const {
			attributes,
			setAttributes,
			isSelected,
		} = props;
		const {isInToc, dynamicId} = attributes;

		return (
			<Fragment>
				<BlockEdit {...props} />
				{isSelected &&
				<InspectorAdvancedControls>
					<ToggleControl
						label='Included in TOC'
						checked={!!isInToc}
						onChange={() => setAttributes({isInToc: !isInToc})}
					/>
				</InspectorAdvancedControls>
				}
				{isSelected &&
				<InspectorAdvancedControls>
					<ToggleControl
						label='Generate element ID dynamically'
						checked={!!dynamicId}
						onChange={() => setAttributes({dynamicId: !dynamicId})}
					/>
				</InspectorAdvancedControls>
				}
			</Fragment>
		);
	};
}, 'isInTocControls');
addFilter(
	'editor.BlockEdit',
	'toc/is-in-toc-control',
	isInTocControls
);

// Conditional heading ID
const updateElementId = (extraProps, blockType, attributes) => {
	if (blockType.name !== 'core/heading')
		return extraProps;

	if(attributes.dynamicId){
		extraProps.id = attributes.headingID;
	} else {
		extraProps.id = attributes.anchor;
	}

	return extraProps;
}
addFilter(
	'blocks.getSaveContent.extraProps',
	'toc/update-element-id',
	updateElementId
);
