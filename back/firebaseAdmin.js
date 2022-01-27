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
const getDecodedToken = async (idToken) => await admin.auth().verifyIdToken(idToken);

const getCustomToken = async (idToken) =>{
    const decodedToken= await getDecodedToken(idToken);
    const customToken = await admin.auth().createCustomToken(decodedToken.uid)
    return customToken;
}

const getUserByToken = (token) =>{
    return admin.auth().verifyIdToken(token);
}

const setAdminRole = (uid, adminRole) =>{
    return admin.auth().setCustomUserClaims(uid, { admin: adminRole });
}

module.exports = {getAllUsers, deleteUser, getCustomToken, setAdminRole, updateUser, getUser, getUserByToken, getDecodedToken}