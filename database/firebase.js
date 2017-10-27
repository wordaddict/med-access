const admin = require("firebase-admin");

var db = admin.database();
var ref = db.ref("server/saving-data/fireblog");

var usersRef = ref.child("users");
  usersRef.set({
    username,
    full_name
  });
