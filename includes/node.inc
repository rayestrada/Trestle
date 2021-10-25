<?php
/**
 * @file
 * Node-related functions.
 */

/**
 * Implements hook_preprocess_node().
 */
function trestle_preprocess_node(&$vars, $hook) {
  // Add $unpublished variable.
  $vars['unpublished'] = (!$vars['status']) ? TRUE : FALSE;

  // Add pubdate to submitted variable.
  $vars['pubdate'] = '<time pubdate datetime="' . format_date($vars['node']->created, 'custom', 'c') . '">' . $vars['date'] . '</time>';
  if ($vars['display_submitted']) {
    $vars['submitted'] = t('Submitted by !username on !datetime', array('!username' => $vars['name'], '!datetime' => $vars['pubdate']));
  }

  // Add a class for the view mode.
  if (!$vars['teaser']) {
    $vars['classes_array'][] = 'view-mode-' . $vars['view_mode'];
  }

  $vars['title_attributes_array']['class'][] = 'node__title';
  $vars['title_attributes_array']['class'][] = 'node-title';

  // Remove some default node classes.
  $vars['classes_array'] = array_values(array_diff($vars['classes_array'], array(
    'node-' . $vars['node']->type,
  )));
  $vars['classes_array'] = array_values(array_diff($vars['classes_array'], array(
    'view-mode-' . $vars['view_mode'],
  )));
  $vars['classes_array'] = array_values(array_diff($vars['classes_array'], array(
    'node' . $vars['view_mode'],
  )));


  // Add default node attributes.
  $vars['classes_array'][] = 'node--' . drupal_html_class($vars['node']->type);
  $vars['attributes_array']['role'][] = 'article';

  // Change attributes for view modes.
  if (isset($vars['view_mode'])) {
    $vars['classes_array'][] = 'node--view-mode-' . drupal_html_class($vars['view_mode']);
  }
  

  // Add classes array to attributes array.
  $vars['attributes_array']['class'] = $vars['classes_array'];

  // Run node-type-specific preprocess functions, like
  // trestle_preprocess_node_page() or trestle_preprocess_node_story().
  $function = __FUNCTION__ . '_' . $vars['node']->type;
  if (function_exists($function)) {
    $function($vars, $hook);
  }
}

/**
 * Preprocess Press Release
 * @param $vars
 */
function trestle_preprocess_node_press_release(&$vars, $hook) {
  /** VIEW MODE FULL */
  if ($vars['view_mode'] == 'full') {
    if (!empty($vars['content']['field_date'])) {
      $vars['content']['field_date'][0]['#markup'] .= ' | <em>Press Release</em>';
    }
  }

  /** VIEW MODE SECONDARY CONTENT */
  if ($vars['view_mode'] == 'secondary_content') {
    //Changing field labels
    $change_label_array = array(
      //'field_name' => 'new label'
      'field_issue'            => 'Issues',
      'field_pr_external_link' => 'Source',
      'field_related_cases'    => 'Cases',
      'field_file_attachment'  => 'Files'
    );
    foreach($change_label_array as $field => $label) {
      if (!empty($vars['content'][$field])) {
        $vars['content'][$field]['#title'] = $label;
      }
    }
  }

  /** TEASER */
  if ($vars['view_mode'] == 'teaser') {
    $vars['classes_array'][] = 'icon-case-news-story';
    $vars['classes_array'][] = 'node-teaser-list-item';
    
    // Change teaser to outcome fields if outcame date is present
    if (!empty($vars['content']['field_date'])) {
      $vars['content']['field_date'][0]['#markup'] =  '<p class="byline">' . $vars['content']['field_date'][0]['#markup'] . ' | <em>'. t('Press Release') .'</em></p>';
    }
  }
}

/**
 * Preprocess Person
 * @param $vars
 */
function trestle_preprocess_node_person(&$vars, $hook) {
  if(!empty($vars['content']['field_extra_fields_title'])) {
    /** CHANGE extra fields title for board members */
    if($vars['field_person_type'][LANGUAGE_NONE][0]['target_id'] == 1841 || $vars['field_person_type'][LANGUAGE_NONE][0]['target_id'] == 1842) {
//      $vars['content']['field_extra_fields_title']['#markup'] = '<h3 class="node-title">' . $vars['title'] . '</h3>';
    }

    $vars['classes_array'][] = 'nodeid-' . $vars['nid'];

    // add class for person type
    if (!empty($vars['field_person_type'])) {
      $typearray = $vars['field_person_type'][LANGUAGE_NONE];
      foreach($typearray as $typeitem) {
        $term = taxonomy_term_load($typeitem['target_id']);
        $vars['classes_array'][] = 'type-' . drupal_html_class($term->name);
      }
    }
  }
}

/**
 * Preprocess Case
 * @param $vars
 */
function trestle_preprocess_node_case(&$vars, $hook) {
  // Add supreme court group as a class to the node
  if (!empty($vars['field_court'])) {
    $node = node_load($vars['nid']);

    if ($node->field_court[LANGUAGE_NONE][0]['tid'] == 1311) {
      $vars['classes_array'][] = 'supreme-court';
    }
  }
  
  // Add classes based on if the case is decided or not
  if (!empty($vars['content']['field_outcome_date'])) {
    $vars['classes_array'][] = 'decided';
  } else {
    $vars['classes_array'][] = 'undecided';
  }


  /** TEASER */
  if ($vars['view_mode'] == 'teaser') {
    $vars['classes_array'][] = 'node-teaser-list-item';

    // Change teaser to outcome fields if outcame date is present
    if (!empty($vars['content']['field_outcome_date'])) {
      $vars['content']['field_outcome_date'][0]['#markup'] =  '<p><strong>' . $vars['content']['field_outcome_date'][0]['#markup'] .'</strong></p>';

      $vars['classes_array'][] = 'icon-outcome';

      // Hide filing date and Chamber position
      $vars['content']['field_filing_date']['#access'] = FALSE;
      $vars['content']['field_filing_description']['#access'] = FALSE;
    } else {
      $vars['classes_array'][] = 'icon-filing';

      // Hide Outcome content
      $vars['content']['field_outcome_content']['#access'] = FALSE;

      if (!empty($vars['content']['field_filing_date'])) {
        $vars['content']['field_filing_date'][0]['#markup'] = '<p><strong>' . $vars['content']['field_filing_date'][0]['#markup'] . '</strong></p>';
      }
    }
  }

  /** BOX TEASER */
  if ($vars['view_mode'] == 'box_teaser') {
    // add eqheights class
    $vars['classes_array'][] = 'eqheight';
    
    // Add view case link to node detail
    $vars['content']['field_view_case'] = array(
      '#prefix' => '<div class="field-view-case">',
      '#markup' => l(t('View Case'), 'node/' . $vars['nid'], array('attributes' => array('class' => 'button-link'))),
      '#suffix' => '</div>',
      '#weight' => 99
    );
  }

  // Remove view fields from content and element arrays if they have no results
  if (!empty($vars['content'])) {
    foreach($vars['content'] as $key => $item) {
      if (isset($item['#field_type']) && $item['#field_type'] == 'viewfield') {
        if (empty(views_get_view_result($item[0]['#view_name'], $item[0]['#view_display']))) {
          unset($vars['content'][$key]);
          unset($vars['elements'][$key]);
        }
      }
    }
  }
}