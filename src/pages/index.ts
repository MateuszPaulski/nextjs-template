import { ArHomeTemplate } from "components/templates/ArHomeTemplate";

export default ArHomeTemplate;

export const getServerSideProps = async (context) => {
  const data = await fetch("http://localhost:3000/test.json").then((response) =>
    response.json()
  );
  return {
    props: {
      data,
    },
  };
};
