import Stats from '@/database/models/stats';
import User from '@/database/models/user';
import mongoConnection from '../../../database/connection';

const handler = async(req: any, res: any) => {
  try {
    if(req.method !== 'POST') {
      throw new Error('Invalid method');
    }

    const { email, score, playlistId } = req.body;
    await mongoConnection();

    const user = await User.findOne({email});

    if(!user) {
      return res.status(400).json({ message: 'User does not exist'});
    }

    const statSaved = await Stats.findOne({user, playlistId}).lean();
    if(statSaved) {
      if(statSaved.besScore < score) {
        await Stats.findOneAndUpdate({user, playlistId}, {...statSaved, bestScore: score}, {new: true});
        return res.status(200).json({ message: 'Score updated successfully'});
      }else {
        return res.status(200).json(
          { 
            message: 'Nothing to update, the score is lower or equal that the current best score'
          }
        );
      }
    }else {
      const newStats = new Stats({user, playlistId, bestScore: score});
      await newStats.save();
      return res.status(201).json({ message: 'New stats saved successfully'});
    }
  } catch(err) {
    console.log(err);
    return res.status(500).json({ message: 'Unexpected error'});
  };
};

export default handler;
