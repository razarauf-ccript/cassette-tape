import { redirect } from 'next/navigation';
import { loadEnvConfig } from '@next/env'


export default async function CassettePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const {id} = await params

  console.log(id);

  return (
    <div >
      <main>
        <h1>Hello, NextJS Cassette {id}!</h1>
      </main>
    </div>
  );
}
