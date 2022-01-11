const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


const getAllUsers = () => {
    let users = [];
    return admin.auth().listUsers();
};

const deleteUser = (uid) => {
    return admin.auth().deleteUser(uid);
}

const updateUser = (uid, properties)=>{
    return admin.auth().updateUser(uid, properties);

}

const checkToken = (idToken) =>{
    admin.auth().verifyIdToken(idToken).then((decodedToken) => {
        const uid = decodedToken.uid;
        console.log(uid);
    })
        .catch((error) => {
            console.log(error);
        });
}

const setAdminRole = (uid, adminRole) =>{
    return admin.auth().setCustomUserClaims(uid, { admin: adminRole });
}

module.exports = {getAllUsers, deleteUser, checkToken, setAdminRole}