# Trestle Drupal 8 Theme

## Global Requirements
Node 10

## Install theme dependencies
The gulp file should be all setup for you. All you should have to do is install the dependencies from package.json locally and remove git tracking on the theme.
```
lando npm install
```

## Compiling
**Development**: Starts a watch on sass, js and images 
```
lando npm run dev
  
# or use the lando command alias
lando watch
```

**Production**: Compiles and minifies files for final packaging
```
lando npm run build
  
# or use the lando command alias
lando compile
```

## Templates

To override template files, copy core `classy` theme template files into this theme's `templates` sub-directory.
