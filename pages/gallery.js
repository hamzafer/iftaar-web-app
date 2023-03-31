import {useEffect, useState} from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Gallery.module.css";
import AWS from "aws-sdk";

const s3 = new AWS.S3({
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    region: process.env.NEXT_PUBLIC_AWS_REGION,
});

export default function Gallery() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const getImages = async () => {
            try {
                const response = await s3
                    .listObjectsV2({
                        Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
                    })
                    .promise();

                const imageKeys = response.Contents.map((obj) => obj.Key);
                const urls = await Promise.all(imageKeys.map(getSignedUrl));
                setImages(urls);
            } catch (error) {
                console.log(error);
            }
        };

        getImages();
    }, []);

    const getSignedUrl = async (key) => {
        const params = {
            Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
            Key: key,
            Expires: 60 * 5 // URL expires in 5 minutes
        };
        return await s3.getSignedUrlPromise('getObject', params);
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Gallery | Next</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Gallery</h1>

                <div className={styles.grid}>
                    {images.map((url) => (
                        <div key={url} className={styles.card}>
                            <Image
                                src={url}
                                alt={"image"}
                                width={300}
                                height={200}
                            />
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
