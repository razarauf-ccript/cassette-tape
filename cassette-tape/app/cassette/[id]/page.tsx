import React from "react"
import { redirect } from 'next/navigation';
import { loadEnvConfig } from '@next/env'
import TapeCreator from "../tapeCreator";


export default async function CassettePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params

  // console.log(id);

  return (
    <div>
      <main>
          <TapeCreator id={id} />
      </main>
    </div>
  );
}
