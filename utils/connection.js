import { MongoClient } from "mongodb";

export async function getCollection() {
    
            const client = await MongoClient.connect(
                `${process.env.MONGODB_URI}/?appName=Cluster0&retryWrites=true&w=majority`,
                {
                    tlsAllowInvalidCertificates: true,
                }
            );
            const db = client.db();
    
            const meetupsCollection = db.collection("meetups");
    return {client, meetupsCollection};

}
