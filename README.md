# BlockedIn

[![Blockchain CI](https://github.com/JoseRodrigues443/blockedin/actions/workflows/blockchain.yaml/badge.svg)](https://github.com/JoseRodrigues443/blockedin/actions/workflows/blockchain.yaml)
[![React UI CI](https://github.com/JoseRodrigues443/blockedin/actions/workflows/ui.yaml/badge.svg)](https://github.com/JoseRodrigues443/blockedin/actions/workflows/ui.yaml)
[![React UI CI](https://github.com/JoseRodrigues443/blockedin/actions/workflows/api.yaml/badge.svg)](https://github.com/JoseRodrigues443/blockedin/actions/workflows/api.yaml)
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/JoseRodrigues443/blockedin)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/JoseRodrigues443/blockedin)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
![node-current](https://img.shields.io/node/v/v)
![GitHub issues](https://img.shields.io/github/issues-raw/JoseRodrigues443/blockedin)

A Decentralized professional networking and career development social media app built with Web3 technologies

![BlockedIn flow](./docs/img/universal-profile.jpg)

## Local env

> Note: The react application uses symlinks to obtain the artifacts of the blockchain folder. Make sure your system works with symlinks properly (ex: unix systems). Setups with FAT filesystem will not work with this.

```bash

    # Terminal 1
    cd blockchain
    make compile
    make test
    make local

    # Terminal 2
    cd blockchain
    make deploy-local

    # Terminal 3
    make frontend


```

# License

BlockedIn is available under the GNU General Public License version 3. See the [LICENSE](LICENSE) file for more info.
