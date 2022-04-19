import Head from "next/head";
import SearchHeader from "../../components/SearchHeader";
import { API_KEY, CONTEXT_KEY } from "/keys";
import { useRouter } from "next/router";
import SearchResults from "../../components/SearchResults";
const SearchPage = ({ data }) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term}</title>
      </Head>
      <SearchHeader />
      <SearchResults results={data} />
    </div>
  );
};

export default SearchPage;

export async function getServerSideProps(context) {
  const term = context.query.term;
  const startIndex = context.query.start || "0";
  const useDummyData = false;
  console.log(process.env.API_KEY, process.env.CONTEXT_KEY);
  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${term}&start=${startIndex}`
  ).then((res) => res.json());
  return {
    props: { data },
  };
}
