// pages/parts/[component_id].js

import { useRouter } from 'next/router';

const ComponentPage = ({ component }) => {
  const router = useRouter();

  // If the page is not yet generated, show a loading state
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{component.title}</h1>
      <p>{component.body}</p>
      {/* Render other component details here */}
    </div>
  );
};

export async function getStaticPaths() {
  // Initially no paths are defined to pre-render
  return {
    paths: [],
    fallback: 'blocking', // Pages will be generated on-demand if not already generated
  };
}

export async function getStaticProps({ params }) {
  const { component_id } = params;
  console.log(component_id)

  // Fetch the component data from an API or database
  const res = await fetch(`http://127.0.0.1:8000/items/${component_id}`);
  console.log("this is calling ",res)
  const component = await res.json();
  
  console.log(component)


  // If the component is not found, return a 404 page
  if (!component) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      component,
    },
    revalidate: 60, // Revalidate the page every 60 seconds
  };
}

export default ComponentPage;
