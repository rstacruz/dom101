## Tests

Update the README file (auto-built from inline comments)

    make

Console tests (jsdom)

    npm test

Browser tests

    make browser-tests

## Releasing new versions

    make
    npm test
    bump *.json
    npm publish
    git release
