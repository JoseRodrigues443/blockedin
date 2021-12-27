.PHONY: all test clean

build:
	npm run build:ui
	npm run build:blockchain

frontend:
	npm run run:ui
