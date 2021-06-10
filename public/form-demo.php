<?php

/**
 * Plugin Name: Form Demo
 */

function entrypoints()
{
    $manifest = json_decode(file_get_contents(plugin_dir_path(__FILE__) . "/asset-manifest.json"), true);
    return $manifest["entrypoints"];
}

function echo_css_file($asset)
{
    wp_enqueue_style($asset, '/wp-content/plugins/build/' . $asset, array(), false);
}

function echo_js_file($asset)
{
    wp_enqueue_script($asset, '/wp-content/plugins/build/' . $asset, array(), false, true);
}

function inject_css_files()
{
    foreach (entrypoints() as $key => $asset_name) {
        if (str_ends_with($asset_name, ".css")) {
            echo_css_file($asset_name);
        }
    }
}
add_action('wp_enqueue_scripts', 'inject_css_files');


function inject_js_files()
{
    foreach (entrypoints() as $key => $asset_name) {
        if (str_ends_with($asset_name, ".js")) {
            echo_js_file($asset_name);
        }
    }
}
add_action('wp_enqueue_scripts', 'inject_js_files');
