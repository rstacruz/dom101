mdextract = ./node_modules/.bin/mdextract

update: README.md
	@(sed '/begin api/q' $<; echo; cat *.js | ${mdextract}; echo; sed -n '/end api/,$$p' $<) > $<~
	@mv $<~ $<
