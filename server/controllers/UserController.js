
const firebaseAdmin = require('../modules/firebase').FirebaseApp;
const db = firebaseAdmin.firestore();

exports.user_scores = (req, res) => {

    const users = {};

    db.collection('users').get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
        users[doc.id] = doc.data().geekScore;
        
    });
    res.send(users);
  })
  .catch((err) => {
    console.log('Error getting documents', err);
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
        projects:req.body.projects
    }

    db.collection('users').doc().set(user).then(() => {
        console.log("Saved user to database");
        res.send({success: "true"});
    });

      
}

exports.update_user_score = (req, res) => {
    res.send('NOT IMPLEMENTED');

}

exports.reset_scores = (req, res) => {

    res.send('NOT IMPLEMENTED');

}