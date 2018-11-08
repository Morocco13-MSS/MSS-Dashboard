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

#### How to view the dashboard (first time users, assuming previous setup is complete)

1) Open Terminal (Mac) or your Command Prompt (Windows)
2) Change your directory to the location of mss-server by pasting the following command in your command line from 1).

`cd <pathToFolder>`

ex:

`cd /Users/linjo/Documents/csc-13-mss/mss-server`

3) Run the following command

`npm start`

4) Open another Terminal or Command Prompt window. and do the same for `mss-dashboard`

ex:

`cd /Users/linjo/Documents/csc-13-mss/mss-dashboard`
`npm start`

5) Your web browser should open http://localhost:3000/.

6) Credentials

Example User Name and Password to login:

User: majbar
Password: <can be anything you want, but you must type something>
