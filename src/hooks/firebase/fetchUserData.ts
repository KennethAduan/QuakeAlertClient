import { doc } from 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';

import { db } from '~/src/services/firebase/config';
import { useAuth } from '~/src/services/state/context/authContex';
const FetchUserData = () => {
  const { user } = useAuth();
  const userId = user.uid;
  const [value, loading, error] = useDocument(doc(db, 'users_dummy', userId), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  return { value, loading, error };
};

export default FetchUserData;
