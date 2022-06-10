import { Meta } from 'layouts/Meta';
import { useRouter } from 'next/router';
import { Main } from 'templates/Main';

import Careers from '@/components/Cards/Careers';
import Programs from '@/components/Cards/Programs';
import Quote from '@/components/Cards/Quote';
import SchoolLocation from '@/components/Cards/SchoolLocation';
import SideBySideSmall from '@/components/Cards/SideBySideSmall';

const Index = () => {
  const router = useRouter();
  return (
    <Main
      meta={
        <Meta title="Apple Montessori" description="Apple Montessori Schools" />
      }
    >
      <img
        src={'/assets/images/apple-montessori.jpg'}
        alt="Apple Montessori Logo"
      />
      <h1 className="text-2xl font-bold">Hello world</h1>
      <p>current route:</p>
      <pre>
        <code>{router.pathname}</code>
      </pre>
      <SideBySideSmall />
      <br />
      <Quote />
      <br />
      <SchoolLocation />
      <br />
      <Programs />
      <br />
      <Careers />
    </Main>
  );
};

export default Index;
