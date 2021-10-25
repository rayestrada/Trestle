<?php
/**
 * @file
 * Block-related functions.
 */

/**
 * Implements hook_preprocess_block().
 */
function trestle_preprocess_block(&$vars) {
  // Use a template with no wrapper for the page's main content.
  if ($vars['block_html_id'] == 'block-system-main') {
    $vars['theme_hook_suggestions'][] = 'block__no_wrapper';
  }

  // Classes describing the position of the block within the region.
  if ($vars['block_id'] == 1) {
    $vars['classes_array'][] = 'first';
  }
  // The last_in_region property is set in zen_page_alter().
  if (isset($vars['block']->last_in_region)) {
    $vars['classes_array'][] = 'last';
  }
  $vars['classes_array'][] = $vars['block_zebra'];

  $vars['title_attributes_array']['class'][] = 'block__title';
  $vars['title_attributes_array']['class'][] = 'block-title';

  // Add Aria Roles via attributes.
  switch ($vars['block']->module) {
    case 'system':
      switch ($vars['block']->delta) {
        case 'main':
          // Note: the "main" role goes in the page.tpl, not here.
          break;
        case 'help':
        case 'powered-by':
          $vars['attributes_array']['role'] = 'complementary';
          break;
        default:
          // Any other "system" block is a menu block.
          $vars['attributes_array']['role'] = 'navigation';
          break;
      }
      break;
    case 'menu':
    case 'menu_block':
    case 'blog':
    case 'book':
    case 'comment':
    case 'forum':
    case 'shortcut':
    case 'statistics':
      $vars['attributes_array']['role'] = 'navigation';
      break;
    case 'search':
      $vars['attributes_array']['role'] = 'search';
      break;
    case 'help':
    case 'aggregator':
    case 'locale':
    case 'poll':
    case 'profile':
      $vars['attributes_array']['role'] = 'complementary';
      break;
    case 'node':
      switch ($vars['block']->delta) {
        case 'syndicate':
          $vars['attributes_array']['role'] = 'complementary';
          break;
        case 'recent':
          $vars['attributes_array']['role'] = 'navigation';
          break;
      }
      break;
    case 'user':
      switch ($vars['block']->delta) {
        case 'login':
          $vars['attributes_array']['role'] = 'form';
          break;
        case 'new':
        case 'online':
          $vars['attributes_array']['role'] = 'complementary';
          break;
      }
      break;
  }

  $module = $vars['block']->module;
  $module_class = drupal_html_class($module);
  $delta = $vars['block']->delta;
  $delta_class = drupal_html_class($delta);

  // Remove some default block classes.
  $vars['classes_array'] = array_values(array_diff($vars['classes_array'], array(
    'block-' . $module_class,
    'block-menu',
  )));

  // Add new default block classes.
  $vars['classes_array'][] = 'block--' . drupal_html_class($module_class);
  $vars['classes_array'][] = 'block--' . drupal_html_class($module_class) . '-' . drupal_html_class($delta_class);

  // Add default title & content classes.
  $vars['title_attributes_array']['class'][] = 'block__title';
  $vars['content_attributes_array']['class'][] = 'block__content';
}

/**
 * Override or insert variables into the block templates.
 *
 * @param $vars
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("block" in this case.)
 */
function trestle_process_block(&$vars, $hook) {
  // Drupal 7 should use a $title variable instead of $block->subject.
  $vars['title'] = isset($vars['block']->subject) ? $vars['block']->subject : '';

  // Hide movement through the courts tabs if there is only 1 result
  if ($vars['block_html_id'] == 'block-views-case-history-block') {
    // load view
    $view = views_get_view('case_history');
    $view->set_display('block');
    $view->execute();
    $total = count($view->result);

    if ($total == 1) {
      $vars['classes'] .= ' hide-block';
    }
  }
}