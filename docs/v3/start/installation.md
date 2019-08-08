---
title: Installation
description: Step-by-step instructions to install the Twig-View component on top of a Slim 4 application.
composerCommand: composer require slim/twig-view:3.0.0-alpha
---

Twig-View 3 requires PHP 7.1 or newer. We assume that you are familiar with [Composer](https://getcomposer.org/) and that 
you have already installed [Slim 4](http://www.slimframework.com/).

You can use Slim and Twig-View either with or without a PSR-11 Container.

## Without PSR-11 Container

### Step 1: Install Twig-View

Open a terminal and navigate into your project’s root directory. Execute the bash command shown below.

```bash
{{ page.composerCommand }}
```

This command downloads the Twig-View and its third-party dependencies into your project’s `vendor/` directory. Note that
this would install [Twig](https://twig.symfony.com/) too.

### Step 2: Add Twig-View Middleware

...



## With PSR-11 container

### Step 1: Install Twig-View

Open a terminal and navigate into your project’s root directory. Execute the bash command shown below.

```bash
{{ page.composerCommand }}
```

This command downloads the Twig-View and its third-party dependencies into your project’s `vendor/` directory. Note that
this would install [Twig](https://twig.symfony.com/) too.

### Step 2: Add Twig-View Middleware

...

```php
$app->addMiddleware(\Slim\Views\TwigMiddleware::create(/*...*/));
```

...
