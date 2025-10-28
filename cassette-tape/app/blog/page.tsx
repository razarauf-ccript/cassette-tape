import { redirect } from 'next/navigation';
import { loadEnvConfig } from '@next/env'


export default function Home() {
  return (
    <div >
      <main>
        <h1>Hello, NextJS Blog</h1>
      </main>
    </div>
  );
}
