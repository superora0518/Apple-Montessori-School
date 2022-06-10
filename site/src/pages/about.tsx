import { Meta } from 'layouts/Meta';
import { useRouter } from 'next/router';
import { Main } from 'templates/Main';

const About = () => {
  const router = useRouter();
  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
        recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
        labore voluptatibus distinctio recusandae autem esse explicabo molestias
        officia placeat, accusamus aut saepe.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
        recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
        labore voluptatibus distinctio recusandae autem esse explicabo molestias
        officia placeat, accusamus aut saepe.
      </p>
      <p>current route:</p>
      <pre>
        <code>{router.pathname}</code>
      </pre>
    </Main>
  );
};

export default About;
