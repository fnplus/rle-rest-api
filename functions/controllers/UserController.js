const firebase = require("firebase-admin");
const functions = require("firebase-functions");

const firebaseApp = firebase.initializeApp(functions.config().firebase);

const db = firebase.firestore();

exports.user_scores = (req, res) => {
  const users = [];

  db.collection("users")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let data = doc.data();

        let user = {
          name: data.name.first + " " + data.name.last,
          geekID: data.geekID,
          score: data.geekScore
        };

        users.push(user);
      });
      res.send(users);
    })
    .catch(err => {
      console.log("Error getting documents", err);
    });
};

exports.add_user = (req, res) => {
  const user = {
    address: req.body.address,
    dob: req.body.dob,
    domains: req.body.domains,
    email: req.body.email,
    geekID: req.body.geekID,
    geekScore: req.body.geekScore,
    gender: req.body.gender,
    linkedin: req.body.linkedin,
    name: req.body.name,
    newsletter: req.body.newsletter,
    portfolio: req.body.portfolio,
    projects: req.body.projects
  };

  db.collection("users")
    .doc()
    .set(user)
    .then(() => {
      console.log("Saved user to database");
      res.send({ success: "true" });
    });
};

exports.update_user_score = (req, res) => {
  const userRef = db.collection("users").where("geekID", "==", req.body.geekID);

  userRef
    .get()
    .then(querySnapshot => {
      let docs = querySnapshot.docs;
      return docs[0].ref.update({ geekScore: req.body.score });
    })
    .then(() => {
      console.log("updated user score!");
      res.send({ success: true });
    });
};

exports.reset_scores = (req, res) => {
  const userRef = db.collection("users").where("geekID", "==", req.body.geekID);

  userRef
    .get()
    .then(querySnapshot => {
      let docs = querySnapshot.docs;
      return docs[0].ref.update({ geekScore: 0 });
    })
    .then(() => {
      console.log("reset user score!");
      res.send({ success: true });
    });
};

exports.add_activity_statement = (req, res) => {
  const activity = {};

  activity.verb = req.body.verb;
  activity.version = req.body.version;
  activity.timestamp = req.body.timestamp;
  activity.object = req.body.object;
  activity.actor = req.body.actor;
  activity.stored = req.body.stored;
  activity.authority = req.body.authority;
  activity.id = req.body.id;

  db.collection("activities")
    .doc()
    .set(activity)
    .then(() => {
      console.log("Saved activity to database");
      res.send({ success: "true" });
    });
};
