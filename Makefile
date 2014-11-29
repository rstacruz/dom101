mdextract = ./node_modules/.bin/mdextract
browserify = ./node_modules/.bin/browserify

update: README.md
	@(sed '/begin api/q' $<; echo; cat *.js | ${mdextract}; echo; sed -n '/end api/,$$p' $<) > $<~
	@mv $<~ $<

test/build.js: index.js
	${browserify} -s mdom $< > $@

.PHONY: test/build.js
