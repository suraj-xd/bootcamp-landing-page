import { getSession } from "next-auth/client";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import { db } from "../firebase";

export default function Home({ session, posts }) {
  if (!session) return <Login />;

  return (
    <div className="h-screen bg-gray-300 overflow-hidden">
      <Head>
        <title>Callback</title>
      </Head>

      <Header />
      <div className="feedback">
        {/* <FeedNavbar/> */}
      </div>
      <main className="feedback">
        {/* <Sidebar /> */}
        <Feed posts={posts} />
        {/* <Widgets /> */}
      </main>

    </div>
  );
}

export async function getServerSideProps(context) {
  // Get User
  const session = await getSession(context);

  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: { session, posts: docs },
  };
}
