import { getCollection } from "../../utils/connection";

async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;

        // const { title, image, address, description } = data;


        const {client, meetupsCollection} = await getCollection();

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: "Meetup inserted!" });
    }
}

export default handler;