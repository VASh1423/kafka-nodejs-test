import {run} from "../utils/producer.js";


export const postTest = async (req, res) => {
  try {
    run(req.body);

    res.status(201).send('Done')

  } catch (error) {
    res.status(500).send({ message: error });
  }
};