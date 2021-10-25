<?php
/**
 * @file
 * Region-related functions.
 */

/**
 * Preprocess variables for region.tpl.php
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("region" in this case.)
 */
function trestle_preprocess_region(&$variables, $hook) {
  // Use a template with no wrapper for the content region.
  if ($variables['region'] == 'content') {
    $variables['theme_hook_suggestions'][] = 'region__no_wrapper';
  }
}