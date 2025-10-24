import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import userImg from '../assets/icons8-avatar-48.png'

const MyProfile = () => {
 

  const { user } = use(AuthContext)
   
  return (
   <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-80 text-center">
        {user ? (
          <>
            <img
              src={user.photoURL || userImg}
              alt={user.displayName}
              className="w-32 h-32 mx-auto rounded-full border-4 border-green-400 mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{user.displayName}</h2>
            <p className="text-gray-500 mb-6">{user.email}</p>
            <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300">
              Update Profile
            </button>
          </>
        ) : (
          <p>Loading user info...</p>
        )}
      </div>
    </div>
  );
};

export default MyProfile;