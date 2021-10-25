<?php
/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 */
?>
<!DOCTYPE html>
<!--[if IEMobile 7]><html class="iem7" <?php print $html_attributes; ?>><![endif]-->
<!--[if lte IE 6]><html class="lt-ie9 lt-ie8 lt-ie7" <?php print $html_attributes; ?>><![endif]-->
<!--[if (IE 7)&(!IEMobile)]><html class="lt-ie9 lt-ie8" <?php print $html_attributes; ?>><![endif]-->
<!--[if IE 8]><html class="lt-ie9" <?php print $html_attributes; ?>><![endif]-->
<!--[if (gte IE 9)|(gt IEMobile 7)]><!--><html <?php print $html_attributes; ?>><!--<![endif]-->

<head>
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>

  <meta name="MobileOptimized" content="width">
  <meta name="HandheldFriendly" content="true">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="cleartype" content="on">

  <?php print $styles; ?>
  <?php print $scripts; ?>
  <!--[if lt IE 9]>
  <script src="<?php print base_path() . path_to_theme(); ?>/js/html5-respond.js"></script>
  <![endif]-->


</head>
<body class="<?php print $classes; ?>" <?php print $attributes; ?>>
<p id="skip-link">
  <a href="#content" class="element-invisible element-focusable"><?php print t('Jump to content'); ?></a>
</p>
<?php print $page_top; ?>
<?php include_once 'page.tpl.php'; ?>
<?php print $page_bottom; ?>
</body>
</html>