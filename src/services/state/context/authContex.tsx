import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { auth } from '../../firebase/config';
import addUserFirebase from '../../firebase/functions/addUserFirebase';

interface AuthProps {
  children: ReactNode;
}

interface UserPropsSignIn {
  email: string;
  password: string;
}

interface UserPropsSignUp extends UserPropsSignIn {
  firstName: string;
  lastName: string;
  address: string;
  contactNo: string;
}

export const AuthContext = createContext<any>(null);

export const AuthContextProvider = ({ children }: AuthProps) => {
  const [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setUser(user);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    });

    return unsub;
  }, []);

  // Login user
  const signIn = async ({ email, password }: UserPropsSignIn) => {
    try {
      // Implement login logic here
      await signInWithEmailAndPassword(auth, email, password);

      return { sucess: true };
    } catch (error: any) {
      let message = error.message;
      if (message.includes('(auth/invalid-email)' && '(auth/admin-restricted-operation)'))
        message = 'Invalid email';
      if (message.includes('(auth/invalid-credential)')) message = 'Invalid Credentials';
      return { success: false, message };
    }
  };

  // Register user
  const signUp = async (userData: UserPropsSignUp) => {
    console.log('data in sign up', userData);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );

      const userID = response?.user?.uid;
      addUserFirebase({
        userId: userID,
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        address: userData.address,
        contactNo: userData.contactNo,
      });
      return { success: true, data: response?.user };
    } catch (error: any) {
      let message = error.message;
      if (message.includes('(auth/invalid-email)' && '(auth/admin-restricted-operation)'))
        message = 'Invalid email';
      if (message.includes('(auth/email-already-in-use)')) message = 'This email already exists';
      return { success: false, message };
    }
  };

  // Reset Password
  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return { success: true };
    } catch (error: any) {
      return { success: false, msg: error.message, error };
    }
  };
  // Logout user
  const logout = async () => {
    try {
      await signOut(auth);
      return { success: true };
    } catch (error: any) {
      return { success: false, msg: error.message, error };
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signUp, logout, signIn, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error('useAuth must be wrapped inside AuthContextProvider');
  }

  return value;
};
