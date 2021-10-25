<?php
/**
 * @file
 * Views-related functions.
 */

/**
 * Implements hook_preprocess_views_view().
 */
function trestle_preprocess_views_view(&$vars) {
  // Modify classes to follow SMACSS naming convention.
  $tmp_classes_array = $vars['classes_array'];
  $vars['classes_array'] = preg_replace('/^view-(?!-)/', 'view--', $vars['classes_array']);

  // We add back the default Views classes
  // to make sure ajaxified views still work.
  $vars['classes_array'] = array_unique(array_merge($vars['classes_array'], $tmp_classes_array));
}

/**
 * @param $vars
 */
function trestle_preprocess_views_view_fields(&$vars) {
  // add a custom list style template for view fields
  if ($vars['view']->name == 'case_detail_sidebar_2' && $vars['view']->current_display == 'block') {
    $vars['theme_hook_suggestions'][] = 'views_view_fields__list';
  }
  if ($vars['view']->name == 'recent_activity' && $vars['view']->current_display == 'block_1') {
    $vars['theme_hook_suggestions'][] = 'views_view_fields__list';
  }
}

/**
 * Implements template_preprocess_views_view_unformatted.
 */
function trestle_preprocess_views_view_unformatted(&$vars) {
  $view = $vars['view'];
  if ($view->name == 'taxonomy_term' && $view->current_display == 'page') {
    foreach($vars['view']->result as $rkey => $rval)
    {
      $node = node_load($rval->nid);
      $term = taxonomy_term_load($node->field_court['und'][0]['tid']);
      if (isset($node->field_court) && !(empty($node->field_court))) {
        $vars['classes_array'][$rkey] .= $vars['classes_array'][$rkey] . " " . trestle_slugify($term->name);
      }
    }
  }
}

function trestle_slugify($str) {
  $str = strtolower(str_replace('.', '', $str));
  $slug=preg_replace('/[^A-Za-z0-9-]+/', '-', $str);
  return $slug;
}