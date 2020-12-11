<?php
/**
 * Plugin Name:     Table Of Contents
 * Description:     Generate Table of Contents dynamically.
 * Version:         0.1.1
 * Author:          Rudrastyh team
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     table-of-contents
 *
 * @package         create-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function create_block_table_of_contents_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "create-block/table-of-contents" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'create-block-table-of-contents-block-editor',
		plugins_url( $index_js, __FILE__ ),
		['wp-block-editor', 'wp-blocks', 'wp-editor', 'wp-data', 'wp-element', 'wp-i18n', 'wp-polyfill'],
		$script_asset['version']
	);

	wp_set_script_translations( 'create-block-table-of-contents-block-editor', 'table-of-contents' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'create-block-table-of-contents-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'create-block-table-of-contents-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'create-block/table-of-contents', array(
		'editor_script' => 'create-block-table-of-contents-block-editor',
		'editor_style'  => 'create-block-table-of-contents-block-editor',
		'style'         => 'create-block-table-of-contents-block',
		'render_callback' => 'table_of_contents_callback'
	) );
}
add_action( 'init', 'create_block_table_of_contents_block_init' );

function table_of_contents_callback($block_attributes, $content){
	$content = preg_replace('#<li[^>]+>#', '<li>', $content);
	$content = preg_replace('#\s(id)="[^"]+"#', '', $content);
	return $content;
}
