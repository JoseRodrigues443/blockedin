.PHONY: all test clean

clean:
	npx hardhat clean

compile:
	npx hardhat compile

eslint:
	npm run lint

solhint:
	npm run solhint

lint:
	make eslint
	make solhint

test-report:
	REPORT_GAS=true npx hardhat test

test:
	npx hardhat test

ci:
	make compile
	make size
	make test

size:
	npx hardhat size-contracts
	echo "A contract should be less than 24KB"

console:
	npx hardhat console

local:
	npx hardhat node

deploy-local:
	npx hardhat run scripts/deploy.ts --network localhost