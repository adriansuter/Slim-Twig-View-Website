---
title: Lazy Twig Middleware
description: The LazyTwigMiddleware can be used to load Twig only if needed.
---

## Description

You can substitute `TwigMiddleware` with `LazyTwigMiddleware`
```php
$app->add(LazyTwigMiddleware::create($app));
```

The differences LazyTwigMiddleware only instantiate Twig object when
the middleware run, can save few memory if the Request abort before
reaching our middleware.
