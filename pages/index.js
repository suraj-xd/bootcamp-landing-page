import Head from 'next/head';
import Bootcamp from "../components/Bootcamp/Bootcamp";
import Metatags from '../components/Bootcamp/Metatags';
export default function Home() {
  return (
    <>
    <Metatags/>
    <Bootcamp/>
    </>
  );
}


