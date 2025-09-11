<?php
/**
 * Plugin Name:         Block Visibility Scope
 * Plugin URI:          #
 * Description:         Easily manage block visibility across different screen sizes in the WordPress block editor.
 * Version:             1.0.0
 * Requires at least:   6.3
 * Requires PHP:        7.4
 * Author:              Ravi Gadhiya
 * Author URI:          #
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
function action__bvs_enqueue_assets() {
	// Enqueue the script.
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';
	wp_enqueue_script(
		'bvs_script',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true,
	);

	// Editor-only styles.
	wp_enqueue_style(
		'bvs_editor_style',
		plugins_url( 'build/index.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.css' )
	);

	// Frontend + Editor shared styles.
	wp_enqueue_style(
		'bvs_front_style',
		plugins_url( 'build/style-index.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/style-index.css' )
	);
}
add_action( 'enqueue_block_editor_assets', 'action__bvs_enqueue_assets' );
add_action( 'wp_enqueue_scripts', 'action__bvs_enqueue_assets' );
