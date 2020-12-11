import {RichText} from '@wordpress/editor';
import {useSelect} from '@wordpress/data';
import './editor.scss';

// Generate ToC structure
const toc = (headers) => {
	let rootLevel, subRootLevel, currentLevel, prevLevel, nextLevel, array = [], lastElement;
	let root = document.createElement('ol'), ol, li, a, childLi, childOl, els = [], prevEl, elId;
	for (let i = 0; i < headers.length; i++) {
		currentLevel = headers[i].attributes.level;
		els.push(headers[i].attributes.content);
		if (i === 0) {
			rootLevel = currentLevel;
			array.push(headers[i]);
			li = document.createElement("li");
			elId = stringToSlug(headers[i].attributes.content);
			if (els.includes(`li-${elId}`)) {
				elId = stringToSlug(headers[i].attributes.content + i);
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
			elId = stringToSlug(headers[i].attributes.content);
			if (els.includes(`li-${elId}`)) {
				elId = stringToSlug(headers[i].attributes.content + i);
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
					elId = stringToSlug(headers[i].attributes.content);
					if (els.includes(`li-${elId}`)) {
						elId = stringToSlug(headers[i].attributes.content + i);
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
					elId = stringToSlug(headers[i].attributes.content);
					if (els.includes(`li-${elId}`)) {
						elId = stringToSlug(headers[i].attributes.content + i);
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
			elId = stringToSlug(headers[i].attributes.content);
			if (els.includes(`li-${elId}`)) {
				elId = stringToSlug(headers[i].attributes.content + i);
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

// Equivalent of WordPress sanitize_title()
const stringToSlug = (str) => {
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
	const {
		attributes: {content, title},
		setAttributes,
		className
	} = props;

	const allBlocks = useSelect((select) => select("core/block-editor").getBlocks());
	let headers = [];
	allBlocks.forEach((block, index) => {
		if (block.name === 'core/heading' && block.attributes.isInToc)
			headers.push(block);
	});

	const tocHtml = toc(headers).innerHTML;
	setAttributes({
		content: tocHtml
	});

	return (
		<div>
			<RichText
				tagName="h2"
				onChange={(newValue) => setAttributes({title: newValue})}
				value={title ? title : 'Table of Contents'}
			/>
			<div className="toc" dangerouslySetInnerHTML={{__html: tocHtml}}/>
		</div>
	);
};
