mdextract = ./node_modules/.bin/mdextract
browserify = ./node_modules/.bin/browserify
files = $(wildcard *.js)

update: README.md
	@echo 'updating readme.md'
	@(sed '/begin api/q' $<; echo; cat *.js | ${mdextract}; echo; sed -n '/end api/,$$p' $<) > $<~
	@mv $<~ $<

test-browser: test/build.js
	open test/index.html

test/build.js: index.js $(files)
	${browserify} -s mdom $< > $@
