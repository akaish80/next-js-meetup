import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetails";
import { getCollection } from "../../utils/connection";
import { ObjectId } from "mongodb";

function MeetupDetails(props) {
    return (
        <>
        <Head>
            <title>{props?.meetupData?.title}</title>
            <meta
                name="description"
                content={props?.meetupData?.description}
            />
        </Head>
        <MeetupDetail
            image={props?.meetupData?.image}
            title={props?.meetupData?.title}
            address={props?.meetupData?.address}
            description={props?.meetupData?.description}
        />
        </>
    );
}

export async function getStaticPaths() {
    const {client, meetupsCollection} = await getCollection();
    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();
    client.close();
    return {
        fallback: true,
        paths:  meetups.map(meetup => ({
            params: { meetupId: meetup._id.toString() }
        })),
    };
}

export async function getStaticProps(context) {
    const { meetupId } = context.params;
    console.log(meetupId);
    const {client, meetupsCollection} =  await getCollection();
    const selectedMeetup = await meetupsCollection.findOne({_id: new ObjectId(meetupId)});
    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                image: selectedMeetup.image,
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                description: selectedMeetup.description,
            },
        },
    };
}


export default MeetupDetails;
