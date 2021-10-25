<?php
/**
 * @file
 * Field-related functions.
 */

/**
 * Implements hook_preprocess_field().
 */
function trestle_preprocess_field(&$vars) {

  $vars['classes_array'] = array_values(array_diff($vars['classes_array'], array(
    'field-name-' . $vars['field_name_css'],
    'field-type-' . $vars['field_type_css'],
    //'field-label-above',
    //'field-label-hidden',
    //'field-label-inline',
  )));

  // Add new default field classes.
  $vars['classes_array'][] = 'field--' . str_replace('field-', '', $vars['field_name_css']);

  // Uncomment the following if you want a class for the field type.
  //$vars['classes_array'][] = 'field--' . $vars['field_type_css'];


  // Related Cases as a list
  $vars['element']['#field_name'] == 'field_related_cases' ? $vars['theme_hook_suggestions'][] = 'field__list' : '';

  // Related Cases as a list
  $vars['element']['#field_name'] == 'field_file_attachment' ? $vars['theme_hook_suggestions'][] = 'field__list' : '';

  // Related Cases as a list
  $vars['element']['#field_name'] == 'field_related_press' ? $vars['theme_hook_suggestions'][] = 'field__list' : '';

  // Add tid class to tag
  if ($vars['element']['#field_name'] == 'field_issue' && !empty($vars['items'])) {

    // template suggestion to a field list format
    $vars['theme_hook_suggestions'][] = 'field__list';

    // add class to tags only if they are links
    foreach ($vars['items'] as $id => $topic) {
      if (!empty($topic['#options'])) {
        $vars['items'][$id]['#options']['attributes']['class'] = array(
          'tags',
          'tag-' . $topic['#options']['entity']->tid
        );

        // Add parent class if available
        $parents = taxonomy_get_parents($topic['#options']['entity']->tid);
        if (!empty($parents)) {
          foreach ($parents as $parent) {
            $vars['items'][$id]['#options']['attributes']['class'][] = 'parent-' . $parent->tid;
          }
        }
      }
    }
  }
}


/**
 * Returns HTML for the Display Suite minimal field style.
 */
function trestle_field__minimal($vars) {
  $output = '';
  $config = $vars['ds-config'];
  $classes = isset($config['classes']) ? ' ' . $config['classes'] : '';
  $field_name_class = drupal_html_class($vars['element']['#field_name']);
  $field_label_class = '';

  // Add field label class.
  if ($vars['element']['#label_display'] == 'inline') {
    $field_label_class = ' field__label--inline';
  }
  else {
    $field_label_class .= ' field__label--above';
  }

  // Add a simple wrapper.
  $output .= '<div class="field field--' . str_replace('field-', '', $field_name_class) . $classes . '">';

  // Render the label.
  if (!$vars['label_hidden']) {
    $output .= '<div class="field__label' . $field_label_class . '">' . $vars['label'];
    if (!isset($config['lb-col'])) {
      $output .= ':&nbsp;';
    }
    $output .= '</div>';
  }

  // Render the items.
  foreach ($vars['items'] as $delta => $item) {
    $output .= drupal_render($item);
  }
  $output .="</div>";

  return $output;
}

/**
 * Theme function from Term Reference Tree module
 * - only altering the output function here so we can add classes to the link output
 *
 * implementing theme_term_tree_list()
 */
function trestle_term_tree_list($variables) {
  $element = &$variables['element'];
  $data = &$element['#data'];

  $tree = array();

  // For each selected term:
  foreach ($data as $item) {
    // Loop if the term ID is not zero:
    $values = array();
    $tid = $item['tid'];
    $original_tid = $tid;
    while ($tid != 0) {
      // Unshift the term onto an array
      array_unshift($values, $tid);

      // Repeat with parent term
      $tid = _term_reference_tree_get_parent($tid);
    }

    $current = &$tree;
    // For each term in the above array:
    foreach ($values as $tid) {
      // current[children][term_id] = new array
      if (!isset($current['children'][$tid])) {
        $current['children'][$tid] = array('selected' => FALSE);
      }

      // If this is the last value in the array, tree[children][term_id][selected] = true
      if ($tid == $original_tid) {
        $current['children'][$tid]['selected'] = TRUE;
      }

      $current['children'][$tid]['tid'] = $tid;
      $current = &$current['children'][$tid];
    }
  }

  $output = "<div class='term-tree-list'>";
  $output .= _trestle_output_list_level($element, $tree);
  $output .= "</div>";
  return $output;
}

/**
 * Alternate theme function to output term links with classes
 *
 * Helper function to output a single level of the term reference tree
 * display.
 */
function _trestle_output_list_level(&$element, &$tree) {
  if (isset($tree['children']) && is_array($tree['children']) && count($tree['children']) > 0) {
    $output = '<ul class="term">';
    $settings = $element['#display']['settings'];
    $tokens_selected = $settings['token_display_selected'];
    $tokens_unselected = ($settings['token_display_unselected'] != '') ? $settings['token_display_unselected'] : $tokens_selected;

    $taxonomy_term_info = entity_get_info('taxonomy_term');
    foreach ($tree['children'] as &$item) {
      $term = $taxonomy_term_info['load hook']($item['tid']);
      $uri = $taxonomy_term_info['uri callback']($term);
      $uri['options']['html'] = TRUE;

      // add class to tags only if they are links
      $uri['options']['attributes']['class'] = array(
        'tags',
        'tag-' . $item['tid']
      );

      // Add parent class if available
      $parents = taxonomy_get_parents($item['tid']);
      if (!empty($parents)) {
        foreach ($parents as $parent) {
          $uri['options']['attributes']['class'][] = 'parent-' . $parent->tid;
        }
      }

      $class = $item['selected'] ? 'selected' : 'unselected';
      $output .= "<li class='$class'>";
      if ($tokens_selected != '' && module_exists('token')) {
        $replace = $item['selected'] ? $tokens_selected : $tokens_unselected;
        $output .= token_replace($replace, array('term' => $term), array('clear' => TRUE));
      }
      else {
        $output .= l(entity_label('taxonomy_term', $term), $uri['path'], $uri['options']);
      }
      if (isset($item['children'])) {
        $output .= _trestle_output_list_level($element, $item);
      }
      $output .= "</li>";
    }

    $output .= '</ul>';
    return $output;
  }
}
