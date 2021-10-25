<?php
/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 */

// Render the sidebars to see if there's anything in them.
$sidebar_first = render($page['sidebar_first']);
$sidebar_second = render($page['sidebar_second']);
$marketingRegion = render($page['marketing']);

// If the site is in maintenance mode show the maintenance mode text
if (variable_get('maintenance_mode', 0) && isset($content)) {
    $page['content'] = $content;
}
?>

<div id="page">

    <header class="header clearfix" id="header" role="banner">
        <div id="navigation">
            <div class="inner-wrapper">
                <?php if ($logo): ?>
                    <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"class="header__logo" id="logo">
                      <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>"class="header__logo-image"/>
                    </a>
                <?php endif; ?>

                <?php if (!$logo && $site_name || $site_slogan): ?>
                    <div class="header__name-and-slogan" id="name-and-slogan">
                        <?php if ($site_name && !$logo): ?>
                            <?php if ($is_front): ?>
                                <h1 class="header__site-name" id="site-name">
                                    <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>"
                                       class="header__site-link" rel="home"><span><?php print $site_name; ?></span></a>
                                </h1>
                            <?php else: ?>
                                <h4 class="header__site-name" id="site-name">
                                    <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>"
                                       class="header__site-link" rel="home"><span><?php print $site_name; ?></span></a>
                                </h4>
                            <?php endif; ?>
                        <?php endif; ?>

                        <?php if ($site_slogan): ?>
                            <div class="header__site-slogan" id="site-slogan"><?php print $site_slogan; ?></div>
                        <?php endif; ?>
                    </div>
                <?php endif; ?>
                <?php if ($main_menu): ?>
                    <nav id="main-menu" role="navigation">
                        <?php
                        // This code snippet is hard to modify. We recommend turning off the
                        // "Main menu" on your sub-theme's settings form, deleting this PHP
                        // code block, and, instead, using the "Menu block" module.
                        // @see https://drupal.org/project/menu_block
                        print theme('links__system_main_menu', array(
                            'links' => $main_menu,
                            'attributes' => array(
                                'class' => array('menu', 'links', 'inline', 'clearfix'),
                            ),
                            'heading' => array(
                                'text' => t('Main menu'),
                                'level' => 'h2',
                                'class' => array('element-invisible'),
                            ),
                        )); ?>
                    </nav>
                <?php endif; ?>

                <?php print render($page['navigation']); ?>
                <a href="#" class="mobile-menu-trigger">
                    <span class="element-invisible">Show/Hide Menu</span>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
        </div>
        <?php print render($page['header_search']); ?>
      <?php if ($title): ?><h1 class="page__title title"><?php print $title; ?></h1><?php endif; ?>
      <?php print render($page['header']); ?>
    </header>

    <div id="main" class="clearfix">
        <div class="inner-wrapper">
          <?php // print $breadcrumb; ?>
            <div id="content" class="column" role="main" tabindex="-1">
                <?php print render($page['highlighted']); ?>
                <a id="main-content"></a>
                <?php print render($title_prefix); ?>
                <?php if ($title): ?>
                    <h1 class="page__title title" id="page-title"><?php print $title; ?></h1>
                <?php endif; ?>
                <?php print render($title_suffix); ?>
                <div id="page-control-container">
                    <div class="control">
                        <?php print $messages; ?>
                        <?php print render($tabs); ?>
                        <?php print render($page['help']); ?>
                    </div>
                    <?php if ($action_links): ?>
                        <ul class="action-links"><?php print render($action_links); ?></ul>
                    <?php endif; ?>
                </div><!-- /#page-control-container -->

                <?php print render($page['content']); ?>

                <?php print $feed_icons; ?>
            </div>

            <?php if ($sidebar_first || $sidebar_second): ?>
                <aside class="sidebars">
                    <section class="sidebar-first"><?php print $sidebar_first; ?></section>
                    <section class="sidebar-second"><?php print $sidebar_second; ?></section>
                </aside>
            <?php endif; ?>
        </div>
    </div>
    <?php if ($marketingRegion): ?>
    <div id="marketing">
        <div class="inner-wrapper">
            <?php print render($page['marketing']); ?>
        </div>
    </div>
    <?php endif; ?>


    <footer id="footer">
        <div class="inner-wrapper">
            <?php print render($page['footer']); ?>
        </div>
    </footer>

</div>

<?php print render($page['bottom']); ?>
