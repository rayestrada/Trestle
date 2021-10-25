<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */

?>
<div class="views-row view-row-search-result">
  <?php print $title; ?>
  <div class="views-row-items">
    <?php foreach ($rows as $id => $row): ?>
      <div class="views-row-item">
        <?php print $row; ?>
      </div>
    <?php endforeach; ?>
  </div>
</div>
