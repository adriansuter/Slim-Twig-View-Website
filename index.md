---
layout: default
title: Slim Twig-View
description: Slim Twig-View is a component for the Slim Framework that adds the template engine Twig.
---

<header class="site-header">
    <div class="site-title">Slim Twig-View</div>
</header>

# Home

This is the documentation for the Slim Twig-View Middleware.

[Go to the documentation]({{ site.baseurl }}/docs/v3)

```php
<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';

$app = AppFactory::create();

$app->get('/hello/{name}', function (Request $request, Response $response, array $args) {
    $name = $args['name'];
    $response->getBody()->write("Hello, $name");
    return $response;
});

$app->run();
```
