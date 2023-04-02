import Access from '@/database/models/access';
import mongoConnection from '../../../database/connection';

const handler = async(req: any, res: any) => {
  try {
    if(req.method !== 'POST') {
      throw new Error();
    }
    const { email } = req.body;
    await mongoConnection();

    const accessDB = await Access.findOne({ email });

    if(accessDB) {
      return res.status(200).json({ message: 'You already requested access!, please wait for admin to grant access'});
    }

    const newAccess = new Access({email, accessGranted: false});
    await newAccess.save();

    return res.status(201).json({ message: 'Request created, please wait until get confirmation to login'});
  } catch(err) {
    console.log(err);
    return res.status(500).json({ message: 'Unexpected error'});
  }
};

export default handler;
