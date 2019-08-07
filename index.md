---
layout: default
title: Slim Twig-View
description: Slim Twig-View is a component for the Slim Framework that adds the template engine Twig.
---

<header class="site-header">
    <div class="site-title">Slim Twig-View</div>
</header>

Slim Twig-View is a component that extends the [Slim Framework](https://www.slimframework.com/)
by a middleware such that the template engine [Twig](https://twig.symfony.com/) can easily be used.
In addition, the component would add Twig functions that help template editors to use
Slim routing.

<a href="{{ site.baseurl }}/docs/v3" class="btn btn-primary">User Guide</a>

<div class="alert alert-info">
    <strong>Heads up!</strong> For Slim 4 you will need Twig-View in version 3.
</div>


## Hello World

```php
<?php
use DI\Container;
use Slim\Factory\AppFactory;
use Slim\Views\Twig;
use Slim\Views\TwigMiddleware;

require __DIR__ . '/vendor/autoload.php';

// Create Container
$container = new Container();
AppFactory::setContainer($container);

// Set view in Container
$container->set('view', function() {
    return new Twig('path/to/templates', ['cache' => 'path/to/cache']);
});

// Create App
$app = new AppFactory::create();

// Add Twig-View Middleware
$app->add(TwigMiddleware::create($app));

// Define named route
$app->get('/hello/{name}', function ($request, $response, $args) {
    return $this->get('view')->render($response, 'profile.html', [
        'name' => $args['name']
    ]);
})->setName('profile');

// Render from string
$app->get('/hi/{name}', function ($request, $response, $args) {
    $str = $this->get('view')->fetchFromString(
        '<p>Hi, my name is {{ name }}.</p>',
        [
            'name' => $args['name']
        ]
    );
    $response->getBody()->write($str);
    return $response;
});

// Run app
$app->run();
```
