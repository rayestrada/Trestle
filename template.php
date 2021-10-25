<?php
/**
 * @file
 * Contains the theme's functions to manipulate Drupal's default markup.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728096
 */

// Auto-rebuild the theme registry during theme development.
if (theme_get_setting('trestle_rebuild_registry') && !defined('MAINTENANCE_MODE')) {
  // Rebuild .info data.
  system_rebuild_theme_data();
  // Rebuild theme registry.
  drupal_theme_rebuild();
}

/**
 * Implements HOOK_theme().
 */
function trestle_theme(&$existing, $type, $theme, $path) {
  // If we are auto-rebuilding the theme registry, warn about the feature.
  if (
    // Don't display on update.php or install.php.
    !defined('MAINTENANCE_MODE')
    // Only display for site config admins.
    && function_exists('user_access') && user_access('administer site configuration')
    && theme_get_setting('zen_rebuild_registry')
    // Always display in the admin section, otherwise limit to three per hour.
    && (arg(0) == 'admin' || flood_is_allowed($GLOBALS['theme'] . '_rebuild_registry_warning', 3))
  ) {
    flood_register_event($GLOBALS['theme'] . '_rebuild_registry_warning');
    drupal_set_message(t('For easier theme development, the theme registry is being rebuilt on every page request. It is <em>extremely</em> important to <a href="!link">turn off this feature</a> on production websites.', array('!link' => url('admin/appearance/settings/' . $GLOBALS['theme']))), 'warning', FALSE);
  }

  // hook_theme() expects an array, so return an empty one.
  return array();
}

require_once dirname(__FILE__) . '/includes/html.inc';
require_once dirname(__FILE__) . '/includes/page.inc';
require_once dirname(__FILE__) . '/includes/region.inc';
require_once dirname(__FILE__) . '/includes/block.inc';
require_once dirname(__FILE__) . '/includes/node.inc';
require_once dirname(__FILE__) . '/includes/field.inc';
require_once dirname(__FILE__) . '/includes/views.inc';
require_once dirname(__FILE__) . '/includes/menu.inc';
require_once dirname(__FILE__) . '/includes/form.inc';
require_once dirname(__FILE__) . '/includes/breadcrumb.inc';
require_once dirname(__FILE__) . '/includes/messages.inc';