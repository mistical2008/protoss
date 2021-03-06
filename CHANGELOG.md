#### 4.0.0
* Drop scripts concat workflow, now only webpack
* All css optimization moved to post-css plugins.

#### 3.4.0
* Drop hashSrc usage

#### 3.3.0
* Add config for [cssnano](http://cssnano.co/)
* Drop csso usage

#### 3.2.0
* Add config for config for [gulp-stylelint](https://github.com/olegskl/gulp-stylelint)

#### 3.1.0
* Add 'enabled' option for all main tasks group

#### 3.0.0
* Global refactoring
* Add Webpack 2
* Jade -> Pug
* Drop css prettifying
* Add tests

#### 2.0.0
* Rename  `svgIcons` option to `icons` ([4df44bc](https://github.com/andrey-hohlov/protoss/commit/4df44bc))
* Use node environment variable instead protoss flags ([663e6b0](https://github.com/andrey-hohlov/protoss/commit/663e6b0))
* Rewrite watchers and browsersync ([bc137eb](https://github.com/andrey-hohlov/protoss/commit/bc137eb))
* Add sourcemaps for scss and js ([9260bf2](https://github.com/andrey-hohlov/protoss/commit/9260bf2), [6d9f1d7](https://github.com/andrey-hohlov/protoss/commit/6d9f1d7))
* Add PostHTML ([e35b441](https://github.com/andrey-hohlov/protoss/commit/e35b441), [0b20ee3b](https://github.com/andrey-hohlov/protoss/commit/0b20ee3b))
* Add demo project
* Fix codestyle

For upgrade from 1.5 version:
* Rename `svgIcons` option to `icons`
* Add `watch` property for css bundles, js bundless and templates
* Remove `watch` option
* Replace `browsersync` option by new `serve` option
