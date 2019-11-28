# wallstreet-front-a19
Front de la perm Wallstreet A19.
Ca va etre louuuuurd.

## Setup your env
No server, full web frontend with only react.
However, we use JSX because typing `React.createElement("div", {` is sooo annoying. So we have to compile JSX into standard JS using babel.
Morover, the toolchain has been configured for transpiling ES6 modules into <2015 JS with browserify, just in case the télé du pic is too old.

The babel toolchain is entirely managed by npm, so you just have to:
```
npm install
```
npm installs some JS and binary modules into `node_modules`.
```
npm run build
```
The code inside `src/` is compiled and put into `lib`. It can then be served on the international world wide web of earth.

## Credits
Code by Romain Maliach-Auguste and Victor Tondolo.

Graphics by Baptiste Faucher.

Alarm icon made by [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](https://www.flaticon.com/)

Backend and unicorns in César Richard.
