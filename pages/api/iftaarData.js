import {MongoClient} from 'mongodb';

export default async function handler(req, res) {
    const uri = process.env.DB_CONNECTION_STRING;
    const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
    const dbName = 'iftaar';
    const collectionName = 'iftaarData';

    try {
        await client.connect();
        const database = client.db(dbName);
        const collection = database.collection(collectionName);
        const iftaarData = await collection.find().toArray();
        res.status(200).json(iftaarData);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving iftaar data');
    } finally {
        await client.close();
    }
}
