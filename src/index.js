import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
const { addFilter } = wp.hooks;
import { RichText } from '@wordpress/block-editor';
import './style.scss';

// import './op-toc-sidebar.js';
import Edit from './edit';
import Save from './save';

registerBlockType( 'create-block/op-table-of-contents', {
	title: __( 'OP Table Of Contents', 'op-table-of-contents' ),
	description: __(
		'Insert Table of Contents on your posts/pages and enhance user experience on your WordPress website.',
		'op-table-of-contents'
	),
	category: 'widgets',
	keywords: ['toc'],
	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: '.op-toc'
		},
		title: {
			type: 'string',
			source: 'text',
			selector: 'h2',
			default:'Table of Contents'
		}
	},
	icon: 'editor-ul',
	supports: {
		html: false,
	},
	edit: Edit,
	save: Save
} );

const filterBlocks = (settings, name) => {
	if (name !== 'core/heading') {
		return settings
	}
	settings.attributes = Object.assign( settings.attributes, {
		isInToc:{
			type: 'boolean',
			default: true,
		},
		headingID:{
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
	'op-dev/custom-attributes',
	filterBlocks
)

const { Fragment }	= wp.element;
const { InspectorAdvancedControls }	= wp.blockEditor;
const { createHigherOrderComponent } = wp.compose;
const { ToggleControl, TextControl } = wp.components;

const withAdvancedControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		if (props.name !== 'core/heading') {
			return (
				<BlockEdit { ...props } />
			);
		}
		const {
			attributes,
			setAttributes,
			isSelected,
		} = props;

		const {
			isInToc
		} = attributes;


		return (
			<Fragment>
				<BlockEdit {...props} />
				{ isSelected &&
				<InspectorAdvancedControls>
					<ToggleControl
						label={ __( 'Included in TOC' ) }
						checked={ !! isInToc }
						onChange={ () => setAttributes( {  isInToc: ! isInToc } ) }
					/>
				</InspectorAdvancedControls>
				}

			</Fragment>
		);
	};
}, 'withAdvancedControls');

addFilter(
	'editor.BlockEdit',
	'op-dev/heading-id-control',
	withAdvancedControls
);
function coverApplyExtraClass(extraProps, blockType, attributes) {
	if(blockType.name !== 'core/heading') {
		return extraProps;
	}

	if (typeof attributes.anchor === 'undefined' || attributes.anchor === '') {
		extraProps.id = attributes.headingID;
	} else {
		extraProps.id = attributes.anchor;
	}
	return extraProps;
}

addFilter(
	'blocks.getSaveContent.extraProps',
	'op-dev/update-id',
	coverApplyExtraClass
);
