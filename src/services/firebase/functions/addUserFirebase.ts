import { setDoc, doc } from 'firebase/firestore';

import { db } from '../config';

interface User {
  userId: string | undefined;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  contactNo: string;
}

const addUserFirebase = async ({
  email,
  firstName,
  lastName,
  address,
  contactNo,
  userId,
}: User) => {
  if (userId) {
    // Check if userId is defined
    await setDoc(doc(db, 'users', userId), {
      userId,
      email,
      firstName,
      lastName,
      address,
      contactNo,
    });
  } else {
    console.error('Error: userId is undefined');
    // Handle the error or return early if necessary
  }
};

export default addUserFirebase;
