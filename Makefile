mdx = ./node_modules/.bin/mdx --markdown -x internal
files = $(wildcard *.js)

prepare: README.md
README.md: $(files)
	(sed '/<!--api-->/q' $@; echo; ${mdx} $^; sed -n '/<!--api:end-->/,$$p' $@) > $@~
	mv $@~ $@
