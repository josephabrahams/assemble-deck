# assemble-deck

_[Assemble](http://assemble.io/) powered [reveal.js](http://lab.hakim.se/reveal-js/) authoring framework._


## Installation

Install reveal.js:

    $ bower install

Install build tools:

    $ npm install


## Create the Slides

Place slides as markdown files into `src/slides`:

- Use two blank lines to create a new vertical slide.
- Use three blank lines to create a new horizontal slide.

Place images into `src/images`:

- Reference with `{{ assets }}/images/example.png`.

See [example](https://raw.githubusercontent.com/josephabrahams/assemble-deck/master/src/slides/example.md).


## Build the Deck

Build the deck into `dist`:

    $ grunt

Serve the deck from `dist` and livereload any changes in `src`:

    $ grunt serve

Package the contents of `dist` into `deck.zip`:

    $ grunt package

