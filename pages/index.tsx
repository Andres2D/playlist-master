import { getSession } from "next-auth/react";

export default function Home() {
  return (
    <p>App works!</p>
  )
}

export const getServerSideProps = async(context: any) => {
  const session = await getSession({req: context.req});

  return {
    redirect: {
      destination: session ? '/menu' : '/intro',
      permanent: false
    }
  }
};
