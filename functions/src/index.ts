import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import UserRecord = admin.auth.UserRecord;
import { Event } from 'firebase-functions';

admin.initializeApp(functions.config().firebase);
const firestore = admin.firestore();

// export const onCreateUser = functions.auth.user()
//   .onCreate( (event: Event<UserRecord>) => {
//     const uid = event.data.uid;
//     return firestore
//       .collection('profiles')
//       .doc(uid)
//       .set({
//         username: 'derp',
//         userUID: uid
//       });
//   });
