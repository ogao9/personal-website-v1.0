import firebase from "./firebase";
const firestore = firebase.firestore()
const storage = firebase.storage()

export function updateUser(uid, data) {
  return firestore.collection('users').doc(uid).update(data)
}

export function createUser(uid, data) {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true })
}

//First upload image to storage bucket
//Get URL 
//Upload info to projects firestore

export function createProject(data) {
  const storageRef = storage.ref(data.file.name);

  storageRef.put(data.file).on(
      "state_changed",
      (snapshot) => {
          //let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          //setProgress(percentage);
          console.log("transferring...")
      },
      (err) => {
          setError(err);
      },
      async () => {
          const imageUrl = await storageRef.getDownloadURL();
          const createdAt = firebase.firestore.FieldValue.serverTimestamp();
          const {file, ...noFile} = data;
          const finalData = {...noFile, imageUrl, createdAt}

          return firestore.collection('projects').add(finalData)
      }
  );
}

export function getProjects(){
  const projects = [];

  return firestore
      .collection("projects")
      .get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              const {createdAt, ...noTimestamp} = doc.data()
              projects.push(noTimestamp);
          });
          return projects;
      });
}


