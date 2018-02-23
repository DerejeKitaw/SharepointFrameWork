###
01_Install sharepoint frame work using yeoman
```yo @microsoft/sharepoint```
02_Install gulp developer certificate. 
```gulp trust-dev-cert```
03_Start initial webpart
```gulp serve```

## hellow-world-2

This is where you include your WebPart documentation.

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO
