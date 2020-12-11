import {registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';
import './style.scss';
import './filters.js';
import Edit from './edit';
import Save from './save';

registerBlockType('create-block/table-of-contents', {
	title: __('Table Of Contents', 'table-of-contents'),
	description: __(
		'Insert Table of Contents on your posts/pages and enhance user experience on your WordPress website.',
		'table-of-contents'
	),
	category: 'widgets',
	keywords: ['toc', 'table of contents'],
	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: '.toc'
		},
		title: {
			type: 'string',
			source: 'text',
			selector: 'h2',
			default: 'Table of Contents'
		}
	},
	icon: 'editor-ul',
	supports: {
		html: false,
	},
	edit: Edit,
	save: Save
});
