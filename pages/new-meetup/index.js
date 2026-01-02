import Head from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

function NewMeetup() {
  const router = useRouter();
  async function onAddMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    router.push("/");
  }
  return (
    <>
      <Head>
        <title>Add New Meetup</title>
        <meta
          name="description"
          content="Add your own meetup to the list!"
        />
      </Head>{" "}
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </>
  );
}

export default NewMeetup;
