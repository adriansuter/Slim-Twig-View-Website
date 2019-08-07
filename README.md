# Slim Twig-View Website
This is the repository for the [Slim Twig-View Website](https://adriansuter.github.io/Slim-Twig-View-Website/).

## Contributing

If you spot any errors, typos or missing information, please submit a pull
request.

### Windows User
You need to make sure you have [Ruby Devkit Installed (MSYS2)](https://rubyinstaller.org/add-ons/devkit.html).

### Running Locally

To run this site locally so that you can test your changes:
```bash
$ sudo gem install bundler
$ bundle install
```

Now, run the local jekyll:
```bash
$ bundle exec jekyll serve --baseurl ''
```

and browse to http://localhost:4000

### JavaScript and CSS

The JavaScript and CSS files are managed by `grunt`.

Install the tool chain:

```bash
$ npm install -g grunt-cli
$ npm install
```

To change any JS, edit the appropriate files in `_js` and then run:

```bash
$ grunt terser
```

To change any CSS, edit the appropriate files in `_scss` and then run:

```bash
$ grunt sass
```

### Frontend Libraries

* [Bootstrap 4](https://getbootstrap.com/)
* [JQuery](https://jquery.com/)
* [Popper.js](https://popper.js.org/)
* [Prism.js](https://prismjs.com/)
* [Adobe Fonts TypeKit](https://fonts.adobe.com/typekit)
* [Google Fonts](https://fonts.google.com/)
