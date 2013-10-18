# angular-phonegap-connection
Bower Component for using AngularJS with [PhoneGap's Connection API](http://docs.phonegap.com/en/2.9.0/cordova_connection_connection.md.html#Connection).

## Usage
1. `bower install angular-phonegap-connection`
2. Made sure the `cordova-*.js` script is in your `.html` file.
3. Include the `connection.js` script, and this script's dependencies are included in your app.
4. Add `dbaq.phonegap.connection` as a module dependency to your app.
5. Retrieve the network state:

```javascript

connection.getType(function (networkState) {
	console.log('Connection type: ' + networkState);
});
```

## License
MIT