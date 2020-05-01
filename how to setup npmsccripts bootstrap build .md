# how to uninstall save package in npm?
  - npm uninstall --save gulp-livereload
  - npm uninstall --save imagemin

# how to set up node.js?
  - download node.js
  - 
# how to check npm version?
  - 
  - npm --version to test

# how to  set up a local repository from github?
  - create repository in github and .gitignore
  - clone it into the vs code folder
  - create a templates folder
  - create a dist folder > css folder/ js folder /img
  - create an src folder > css folder/ js folder/scss folder /img


# how to get a hello world from bootstrap?
  - copy bootstrap starter pack and paste in index.html

# how to on initiate npm and create a package.json file?
  - npm init

# how to install bootstrap?
  - npm install bootstrap

# how to install jquery?
  - npm install jquery

# how to install tether?
  - npm install tether

# how to install popper.js?
  - npm install popper.js
  
# how to install gulp, broweser, gulp-sass?
  - copy from node_modules -> bootstrap.min.js / jquery.js/popper.js/tether.js to /dist/js folder
  - copy bootstrap.min.css -> /dist/css


# how to change your CDN links to local?
  - <!-- Bootstrap CSS @ the <head> before title</head>-->
    <link rel="stylesheet" href="../dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../dist/css/style.css">

  - <!-- Optional JavaScript  before final<body> </body>-->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="../dist/js/jquery.min.js"></script>
    <script src="../dist/js/tether.min.js"></script>
    <script src="../dist/js/bootstrap.min.js"></script>

# how to use the install node modules and write scripts?
  - npm install node-sass --save-dev
  - "compile": "node-sass --output-style expanded --source-map=true  -o dist/css src/scss",
  -  
  - npm i imagemin-cli --save--dev
  -"imagemin": "imagemin src/img/* --out-dir dist/img",  
  -  
  - "build": "npm run compile  && npm run imagemin",
  -   
  - npm i onchange --save--dev
  "watch:css": "onchange \"src/scss/*.scss\" -- npm run compile",
    "watch:images": "onchange \"src/img/*\" -- npm run imagemin",
  -   
  - npm i npm-run-all --save-dev
  - "watch": "npm-run-all --parallel watch:**"
  - 
,
 
# how to use the npm to run the scripts in the terminal?
  - npm run build
  - npm run watch ***what i use everytime


# How to minify, prefix and clean css in production?
  - npm i -D autoprefixer clean-css-cli postcss-cli
  - 
  - "prefix": "postcss dist/css/style.css --use=autoprefixer --map=false --output=dist/css/style.css",
  - 
  - Outside the scripts { }
  - "browserslist": ["last 2 versions"]
  - 
  - "minify": "cleancss --level=1 --source-map --source-map-inline-sources --output dist/css/style.min.css dist/css/style.css",
  - 
  - "prod": "npm run compile && npm run prefix && npm run minify"


# how to use the npm to run the scripts in the terminal for production?
- npm run prod
- remember to change the ../dist/css/style.min.css
  