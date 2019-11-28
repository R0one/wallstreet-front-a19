# wallstreet-front-a19
Front de la perm Wallstreet A19.
Ca va etre louuuuurd.
## Backend
[https://github.com/cesar-richard/wallstreet](cesar-richard/wallstreet)

## Setup your env
No server, full web frontend with only react.
However, we use JSX because typing `React.createElement("div", {` is sooo annoying. So we have to compile JSX into standard JS using babel.
The babel toolchain is entirely managed by npm, so you just have to:
```
npm install
```
npm installs some JS and binary modules into `node_modules`.
```
npm run build
```
The code inside `src/` is compiled and put into `lib`. It can then be served on the international world wide web of earth.
