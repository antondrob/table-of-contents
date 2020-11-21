/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import {__} from '@wordpress/i18n';

const {RichText} = wp.editor;
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import {useSelect} from "@wordpress/data";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */

const output = (headers) => {
	let rootLevel, subRootLevel, currentLevel, prevLevel, nextLevel, array = [], lastElement;
	let root = document.createElement('ol'), ol, li, a, childLi, childOl, els = [], prevEl, elId;
	for (let i = 0; i < headers.length; i++) {
		currentLevel = headers[i].attributes.level;
		els.push(headers[i].attributes.content);
		if (i === 0) {
			rootLevel = currentLevel;
			array.push(headers[i]);
			li = document.createElement("li");
			elId = string_to_slug(headers[i].attributes.content);
			if (els.includes(`li-${elId}`)) {
				elId = string_to_slug(headers[i].attributes.content + i);
			}
			li.id = `li-${elId}`;
			els.push(`li-${elId}`);
			a = document.createElement("a");
			a.href = `#${elId}`;
			headers[i].attributes.headingID = elId;
			a.innerHTML = headers[i].attributes.content;
			li.append(a);
			root.append(li);
			continue;
		}
		prevLevel = headers[i - 1].attributes.level;
		if (currentLevel <= rootLevel) {
			array.push(headers[i]);
			li = document.createElement("li");
			elId = string_to_slug(headers[i].attributes.content);
			if (els.includes(`li-${elId}`)) {
				elId = string_to_slug(headers[i].attributes.content + i);
			}
			li.id = `li-${elId}`;
			els.push(`li-${elId}`);
			a = document.createElement("a");
			a.href = `#${elId}`;
			headers[i].attributes.headingID = elId;
			a.innerHTML = headers[i].attributes.content;
			li.append(a);
			root.append(li);
			continue;
		}
		if (currentLevel > prevLevel) {
			prevEl = els[els.length - 2];
			root.querySelectorAll("li").forEach((elem) => {
				if (elem.id == prevEl) {
					ol = document.createElement("ol");
					li = document.createElement("li");
					elId = string_to_slug(headers[i].attributes.content);
					if (els.includes(`li-${elId}`)) {
						elId = string_to_slug(headers[i].attributes.content + i);
					}
					li.id = `li-${elId}`;
					els.push(`li-${elId}`);
					a = document.createElement("a");
					a.href = `#${elId}`;
					headers[i].attributes.headingID = elId;
					a.innerHTML = headers[i].attributes.content;
					li.append(a);
					ol.append(li);
					elem.append(ol);
				}
			});
		} else if (currentLevel === prevLevel) {
			prevEl = els[els.length - 2];
			root.querySelectorAll("li").forEach((elem) => {
				if (elem.id == prevEl) {
					li = document.createElement("li");
					elId = string_to_slug(headers[i].attributes.content);
					if (els.includes(`li-${elId}`)) {
						elId = string_to_slug(headers[i].attributes.content + i);
					}
					li.id = `li-${elId}`;
					els.push(`li-${elId}`);
					a = document.createElement("a");
					a.href = `#${elId}`;
					headers[i].attributes.headingID = elId;
					a.innerHTML = headers[i].attributes.content;
					li.append(a);
					elem.parentNode.append(li);
				}
			});
		} else if (currentLevel < prevLevel) {
			let diff = prevLevel - currentLevel;
			if (diff === 1) {
				ol = li.parentNode.parentNode.parentNode;
			} else if (diff === 2) {
				ol = li.parentNode.parentNode.parentNode.parentNode.parentNode;
			} else if (diff === 3) {
				ol = li.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
			} else if (diff === 4) {
				ol = li.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
			}
			li = document.createElement("li");
			elId = string_to_slug(headers[i].attributes.content);
			if (els.includes(`li-${elId}`)) {
				elId = string_to_slug(headers[i].attributes.content + i);
			}
			li.id = `li-${elId}`;
			els.push(`li-${elId}`);
			a = document.createElement("a");
			a.href = `#${elId}`;
			headers[i].attributes.headingID = elId;
			a.innerHTML = headers[i].attributes.content;
			li.append(a);
			ol.append(li);
		}
	}
	let rootDiv = document.createElement('div');
	rootDiv.append(root);
	return rootDiv;
}

const string_to_slug = function (str) {
	str = str.replace(/^\s+|\s+$/g, ''); // trim
	str = str.toLowerCase();

	// remove accents, swap ñ for n, etc
	var from = "àáäâèéëêìíïîòóöôùúüûñçěščřžýúůďťň·/_,:;";
	var to = "aaaaeeeeiiiioooouuuuncescrzyuudtn------";

	for (var i = 0, l = from.length; i < l; i++) {
		str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
	}

	str = str.replace('.', '-') // replace a dot by a dash
		.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
		.replace(/\s+/g, '-') // collapse whitespace and replace by a dash
		.replace(/-+/g, '-') // collapse dashes
		.replace(/\//g, ''); // collapse all forward-slashes

	return str;
}
export default function Edit(props) {
	const {attributes: {content, title}, setAttributes, className} = props;
	const allBlocks = useSelect((select) => select("core/block-editor").getBlocks());
	let headers = [];
	allBlocks.forEach((block, index) => {
		if (block.name === 'core/heading' && block.attributes.isInToc) {
			headers.push(block);
		}
	});
	const html = output(headers).innerHTML;
	setAttributes({
		content: html
	});
	return (
		<div>
			<RichText
				tagName="h2"
				onChange={(newValue) => setAttributes({title: newValue})}
				value={title ? title : 'Table of Contents'}
			/>
			<div className="op-toc" dangerouslySetInnerHTML={{__html: html}}/>
		</div>

	);
};
