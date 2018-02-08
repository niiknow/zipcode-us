# Database of US zipcode with City, State, and Geo

* zipcode file and python parsing code ripped from/credit to: [static-zipcode-api](https://github.com/dryan/static-zipcode-api)
* zipcode data are stored for easy local folder navigation by using first two digits as folder, example: [https://niiknow.github.io/zipcode-us/db/55/55123.json](https://niiknow.github.io/zipcode-us/db/55/55123.json) - try it yourself for other zipcodes.

1. Serverless API with claudiajs for returning zipcode info
2. php API
3. ZipCode data are deployed to github pages at URL - this allow you to create any API by simply referencing the github repo data

compile db:
```
$ python compile.py
```

test:
```
$ npm run test
```

deploy and update with claudiajs:
```
$ npm run start
# afterward
$ npm run update
```

or just simply use the static file on github:
* https://niiknow.github.io/zipcode-us/db/{zip-prefix-2-digits}/{zipcode-5-digits}.json
* Example: [https://niiknow.github.io/zipcode-us/db/55/55123.json](https://niiknow.github.io/zipcode-us/db/55/55123.json)
  
# MIT

