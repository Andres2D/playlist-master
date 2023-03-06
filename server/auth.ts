import mongoConnection from '../database/connetion';
import User from '../database/models/user';

export const spotifyMongoAuth = async(access_token: string): Promise<boolean | null> => {
  try {
    let user;

    const response = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    });
    const userProfile = await response.json();

    if(!response.ok || !userProfile) {
      return false;
    }

    const { display_name: userName, email, images } = userProfile;
      
    if(!email) {
      return false;
    }
    
    await mongoConnection();
    const userDB = await User.findOne({email});

    if(userDB) {
      return true;
    }
    
    user = new User({ email, userName, image: images[0]?.url || '' });

    const userSign = await user?.save();

    if(!userSign) {
      return false;
    }

    return true;

  }catch(err) {
    return false;
  }
};
