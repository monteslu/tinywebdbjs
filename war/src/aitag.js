var db = require("google/appengine/ext/db");

/**
 * A Key/Value tag for App Inventor. The keyName will be the tag name.
 */
var AITag = exports.AITag = db.Model.extend("AITag", {
    value: new db.TextProperty(),
	created: new db.DateTimeProperty({autoNowAdd: true})
});
