---
title: Hello World without DI-Container
---

The Twig Middleware can be used without dependency injection container. You have two possibilities to access
`Twig` in a route callback:

* Let the middleware attach `Twig` to the server request's attributes and get it from there.
* Do it yourself.


## Pass `Twig` via server request's attributes

Using the fourth parameter of the `TwigMiddleware` constructor, you can instruct the middleware to attach `Twig` to the
server request's attributes. It is best-practice to use `'view'`, but you are free to pass any `string`. Of course
you should pay attention that you do not override any other attribute.

```php
use Slim\Views\TwigMiddleware;

$twigMiddleware = new TwigMiddleware($twig, $routeParser, $basePath, 'view');
```

To retrieve `Twig` in the route callback, you have to read that specific attribute. Use the `TwigContext` helper
class to do that:

```php
use Slim\Views\TwigContext;

$twig = TwigContext::fromRequest($request, 'view');
```

**Note:** The second parameter of `TwigContext::fromRequest()` defaults to `'view'`. So you could omit that if you have
used `'view'` as attribute name in the constructor (best-practice).


### Complete code

```php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Slim\Views\Twig;
use Slim\Views\TwigContext;
use Slim\Views\TwigMiddleware;

require __DIR__ . '/../vendor/autoload.php';

// Create the App.
$app = AppFactory::create();

// Create Twig.
$twig = new Twig(__DIR__ . '/../templates');

// Add the Twig Middleware.
$app->addMiddleware(
    new TwigMiddleware($twig, $app->getRouteCollector()->getRouteParser(), $app->getBasePath(), 'view')
);

$app->get('/', function (Request $request, Response $response, $args): Response {
    $twig = TwigContext::fromRequest($request);
    return $twig->render($response, 'index.twig');
});

$app->run();
```


## Do it yourself

The following code is just one example on how to bring `Twig` into your route callback. You are of course free
to use any technique to accomplish that.

```php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Slim\Views\Twig;
use Slim\Views\TwigMiddleware;

require __DIR__ . '/../vendor/autoload.php';

// Create the App.
$app = AppFactory::create();

// Create Twig and add a global variable.
$twig = new Twig(__DIR__ . '/../templates');

// Add the Twig Middleware.
$app->addMiddleware(
    new TwigMiddleware($twig, $app->getRouteCollector()->getRouteParser(), $app->getBasePath())
);

$app->get('/', function (Request $request, Response $response, $args) use ($twig): Response {
    return $twig->render($response, 'index.twig');
});

$app->run();
```
