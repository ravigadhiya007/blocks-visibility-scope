<?php
/**
 * Plugin Name:         Block Visibility Scope
 * Plugin URI:          https://wordpress.org/plugins/block-visibility-scope/
 * Description:         Easily manage block visibility across different screen sizes in the WordPress block editor.
 * Version:             1.0.0
 * Requires at least:   6.3
 * Requires PHP:        7.4
 * Author:              Ravi Gadhiya
 * Author URI:          https://github.com/ravigadhiya007
 * License:             GPLv2
 * License URI:         https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 * Text Domain:         block-visibility-scope
 * Domain Path:         /languages
 *
 * @package block-visibility-scope
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue block editor assets and front-end styles.
 */
function action__bvs_enqueue_block_editor_assets() {
	// Enqueue the editor script.
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';
	wp_enqueue_script(
		'bvs_script',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true,
	);

	// Load translations for editor script.
	wp_set_script_translations(
		'bvs_script',
		'block-visibility-scope',
		plugin_dir_path( __FILE__ ) . 'languages'
	);
}
add_action( 'enqueue_block_editor_assets', 'action__bvs_enqueue_block_editor_assets' );

/**
 * Enqueue front-end styles.
 */
function action__bvs_enqueue_styles() {
	// Frontend styles.
	wp_enqueue_style(
		'bvs_front_style',
		plugins_url( 'build/style-index.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/style-index.css' )
	);
}
add_action( 'wp_enqueue_scripts', 'action__bvs_enqueue_styles' );

/**
 * Enqueue editor styles for the block editor.
 */
function action__bvs_enqueue_editor_assets() {
	add_editor_style( plugins_url( 'build/index.css', __FILE__ ) );
}
add_action( 'admin_init', 'action__bvs_enqueue_editor_assets' );
