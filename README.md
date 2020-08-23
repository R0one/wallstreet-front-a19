# wallstreet-front-a19
Front de la perm Wallstreet A19.
Ca va etre louuuuurd.

## In a nutshell

One:

```
npm run build
```

Two:

Open `index.html` in a browser and **TEST ME**.

If you don't test this code, you have the moral obligation to pay a beer to all  *permanenciers* **and** to all contributors of this repo, including, but not limited to, those in the "Credits" section. Furthermore, a unicorn might come and do things on you. Things you can't imagine.

## TEST ME

This frontend worked really well back in 2019. However, JS dependencies have been updated because of security vulnerabilities. In the current state, its integration with the server has not been tested.

If the JS deps are too heavy, just grab a modern browser or a node server. Their only purpose is to provide a toolchain for transpiling JSX and other reacty stuff.

## Setting up your env

This is a static frontend, so basically all you need is a browser capable of handling JS. Ideally, there would be no server, and no compilation.

However, as react is a pain in the ass, we used modern syntaxic sugar that provokes diabetes on most browsers. 

(I mean, typing `React.createElement("div", {` is sooo annoying.)

So we have to compile descriptive JSX into imperative, standard JS. For that, we're using babel - behind the scenes, the toolchain is pretty complex, so it might break one day.

By the way, Babel does another thing: it has been configured for transpiling ES6 modules into <2015 JS with browserify, in case the *télé du pic* is too old. If you need to make the transpiled code lighter, configure browserify (we used `.browserlist` for that).

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

PS: Seemingly we do have a CI.
