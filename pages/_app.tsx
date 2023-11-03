import "../styles/globals.css";

type PageProps = {
  title: string;
  description: string;
};

// Define a type/interface for Component
type PageComponent = React.ComponentType<PageProps>;

function MyApp({
  Component,
  pageProps,
}: {
  Component: PageComponent;
  pageProps: PageProps;
}) {
  return <Component {...pageProps} />;
}

export default MyApp;
