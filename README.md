# MSS-Dashboard
- npm install
- npm start
- UI server is up at http://localhost:3000/

##### Information about react-bootstrap

React-Bootstrap currently (2018 oct) targets Bootstrap v3 (in the project I used 3.3.7), please sure Bootstrap v3 is installed.

Steps to install and use:

```
npm install react-bootstrap --save
```

```
npm install bootstrap@3.3.7 --save
```

Inside you index.js file, include bootstrap CSS

```
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
```

When you need to use it

```
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
```

For more information, please visit: https://react-bootstrap.github.io/getting-started/introduction