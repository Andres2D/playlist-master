import Stats from '@/database/models/stats';
import mongoConnection from '../../../database/connection';

const handler = async(req: any, res: any) => {
  try {
    if(req.method !== 'POST') {
      throw new Error('Invalid method');
    }

    const { email, score, playlistId } = req.body;

    await mongoConnection();

    const statSaved = await Stats.findOne({email, playlistId}).lean();
    if(statSaved) {
      if(statSaved.besScore < score) {
        await Stats.findOneAndUpdate({email, playlistId}, {...statSaved, bestScore: score}, {new: true});
        return res.status(200).json({ message: 'Score updated successfully'});
      }else {
        return res.status(200).json(
          { 
            message: 'Nothing to update, the score is lower or equal that the current best score'
          }
        );
      }
    }else {
      const newStats = new Stats({email, playlistId, bestScore: score});
      await newStats.save();
      return res.status(201).json({ message: 'New stats saved successfully'});
    }
  } catch(err) {
    console.log(err);
    return res.status(500).json({ message: 'Unexpected error'});
  };
};

export default handler;
