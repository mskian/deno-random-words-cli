# Random Words CLI

[![Test CLI](https://github.com/mskian/deno-random-words-cli/actions/workflows/test.yml/badge.svg)](https://github.com/mskian/deno-random-words-cli/actions/workflows/test.yml)
![Deno](https://img.shields.io/badge/Deno-464647?style=for-the-badge&logo=deno&logoColor=white)

Random Words CLI Build using Deno

## Prerequisites

- Deno on your System <https://deno.land/#installation>

## Features

- Get Random Words with Definition and Pronunciation
- Get Pronunciation for a Word

## Usage

- Clone or Download the Repo

```sh
git clone https://github.com/mskian/deno-random-words-cli.git
cd deno-random-words-cli
```

- Run the CLI without installation

```sh
# Get Random Words
deno run --allow-net --allow-read main.ts -r

(or)

deno task random

#Get Pronunciation for a Word
deno run --allow-net --allow-read main.ts -p "Hello World"

(or)

deno task pronunciation "Hello World"

# Help Section
deno run --allow-net --allow-read main.ts -h

(or)

deno task help
```

- install via Deno Modules - <https://deno.land/x/randomwords>
- Learn about deno Script installer - <https://deno.land/manual/tools/script_installer>

```sh
deno install --allow-net --name randomwords https://deno.land/x/randomwords/main.ts
```

- install CLI via Cloned repo or download (For Development)

```sh
deno install --allow-net --name randomwords main.ts
```

```sh
# Get Random Words
randomwords -r

#Get Pronunciation for a Word
randomwords -p "Hello World"

# Help Section
randomwords -h
```

## uninstall

```sh
deno uninstall randomwords
```

- Use directly without download or install

```sh
deno run --allow-net https://deno.land/x/randomwords/main.ts -r
deno run --allow-net https://deno.land/x/randomwords/main.ts -p "Hello World"
deno run --allow-net https://deno.land/x/randomwords/main.ts -h
```

## Credits

- Build CLI Tool with Deno -
  <https://dev.to/soubai/build-cli-tool-with-deno-1me7>
- Random Words API - <https://github.com/mcnaveen/Random-Words-API>

## LICENSE

MIT
