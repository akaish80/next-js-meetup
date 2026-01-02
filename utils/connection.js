import { MongoClient } from "mongodb";

export async function getCollection() {
    
            const client = await MongoClient.connect(
                "mongodb+srv://arunkaish_db_user:P4ifOyvbhQoBn3jW@cluster0.zapmpom.mongodb.net/?appName=Cluster0&retryWrites=true&w=majority",
                {
                    tlsAllowInvalidCertificates: true,
                }
            );
            const db = client.db();
    
            const meetupsCollection = db.collection("meetups");
    return {client, meetupsCollection};
}