// pages/parts/[component_id].js
import React from 'react';
import { useRouter } from 'next/router';
import { Metadata } from 'next';
import ProductMain from '@/components/product/productmain';
import Header from '@/components/Header/Header';
import "../../app/globals.css";
import Head from 'next/head';

type Data = {
  id: number;
  title: string;
  body: string;
};

type ComponentPageProps = {
  component: Data;
};

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const product = await fetch(`http://localhost:3001/products/${id}`);
  const resMetadata = await product.json();

  return {
    title: resMetadata.title,
    description: resMetadata.description,
  };
}


const ComponentPage : React.FC<ComponentPageProps> = ({component}:any) => {
  const router = useRouter();
  // If the page is not yet generated, show a loading state
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{`abc ${component.mpn}`}</title>
        {component['description'].map((desc:any, index:number) => (
          <meta key={index} name="description" content={desc} />
        ))}
        <meta name="description" content={component['mpn']} />
      </Head>
    <div>
      <Header />
      <ProductMain data={component}/>
      {/* Render other component details here */}
    </div>
    </>
  );
};

export async function getStaticPaths() {
  // Initially no paths are defined to pre-render
  return {
    paths: [],
    fallback: 'blocking', // Pages will be generated on-demand if not already generated
  };
}

export async function getStaticProps({ params}:any) {
  const { component_id } = params;

  // Fetch the component data from an API or database
  const res = await fetch(`https://csjo3isol4gw64twlbklytyg640zdorr.lambda-url.us-east-1.on.aws/getmpndetails/${component_id}`);
    // Handle 404 error
    if (res.status === 404) {
      return {
        notFound: true,
      };
    }

    // Handle 500 server error
    if (res.status >= 500) {
      throw new Error('Internal Server Error');
    }

  const component = await res.json();
  

  // console.log(component);
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
    revalidate: 3600*24, // Revalidate the page every 60 seconds
  };
}

export default ComponentPage;
