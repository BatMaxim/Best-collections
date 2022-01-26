const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


const getAllUsers = () => {
    return admin.auth().listUsers();
};

const getUser = (uid) => {
    return admin.auth().getUser(uid);
};

const deleteUser = (uid) => {
    return admin.auth().deleteUser(uid);
}

const updateUser = (uid, properties)=>{
    return admin.auth().updateUser(uid, properties);

}

const checkToken = async (idToken) =>{
    const decodedToken= await admin.auth().verifyIdToken(idToken);
    const customToken = await admin.auth().createCustomToken(decodedToken.uid)
    return customToken;

}

const setAdminRole = (uid, adminRole) =>{
    return admin.auth().setCustomUserClaims(uid, { admin: adminRole });
}

module.exports = {getAllUsers, deleteUser, checkToken, setAdminRole, updateUser, getUser}