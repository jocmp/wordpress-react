FILES = $(shell find build -type f ! -path "build/.*")
EXPORT_FILES = $(shell find build -type f ! -path "build/.*")

.PHONY: build zip
build:
		npm run build
		cp -R build/ form_demo

form_demo.zip:
		zip -FSr form_demo.zip form_demo

zip: build form_demo.zip


clean:
	rm -r build/**/* || echo "Build already clean"
	rm -r form_demo/**/* || echo "ZIP dir already clean"
	rm form_demo.zip || echo "ZIP already clean"
