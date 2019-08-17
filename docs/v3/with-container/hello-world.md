---
title: Hello World using a DI-Container
---


## Complete code

```php
use DI\Container;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Slim\Views\Twig;
use Slim\Views\TwigMiddleware;

require __DIR__ . '/../vendor/autoload.php';

// Define the container
$container = new Container();

// Instantiate Twig.
$twig = new Twig(__DIR__ . '/../templates');

// Add Twig to the container.
$container->set(Twig::class, $twig);

// Create the App.
AppFactory::setContainer($container);
$app = AppFactory::create();

// Add the Twig Middleware.
$app->addMiddleware(TwigMiddleware::createFromContainer($app, Twig::class));

$app->get('/', function (Request $request, Response $response, $args): Response {
    $twig = $this->get(Twig::class);
    return $twig->render($response, 'index.twig');
});

$app->run();
```
