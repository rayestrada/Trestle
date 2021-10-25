<?php

/**
 * Return a themed breadcrumb trail.
 *
 * @param $variables
 *   - title: An optional string to be used as a navigational heading to give
 *     context for breadcrumb links to screen-reader users.
 *   - title_attributes_array: Array of HTML attributes for the title. It is
 *     flattened into a string within the theme function.
 *   - breadcrumb: An array containing the breadcrumb links.
 * @return
 *   A string containing the breadcrumb output.
 */
function trestle_breadcrumb($variables) {
  $breadcrumb = $variables['breadcrumb'];
  $output = '';

  // Return the breadcrumb with separators.
  if (!empty($breadcrumb)) {
    // Set the breadcrumb separator
    $breadcrumb_separator = ' / ';

    // Add current page title to breadcrumb
    $item = menu_get_item();
    if (!empty($item['tab_parent'])) {
      // If we are on a non-default tab, use the tab's title.
      $breadcrumb[] = check_plain($item['title']);
    }
    else {
      $breadcrumb[] = drupal_get_title();
    }

    // Provide a navigational heading to give context for breadcrumb links to
    // screen-reader users.
    if (empty($variables['title'])) {
      $variables['title'] = t('You are here');
    }
    // Unless overridden by a preprocess function, make the heading invisible.
    if (!isset($variables['title_attributes_array']['class'])) {
      $variables['title_attributes_array']['class'][] = 'element-invisible';
    }

    // Build the breadcrumb trail.
    $output = '<nav class="breadcrumb" role="navigation">';
    $output .= '<div' . drupal_attributes($variables['title_attributes_array']) . '>' . $variables['title'] . '</div>';
    $output .= '<ol><li>' . implode($breadcrumb_separator . '</li><li>', $breadcrumb) . '</li></ol>';
    $output .= '</nav>';
  }

  return $output;
}