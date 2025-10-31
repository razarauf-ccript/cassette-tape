import { redirect, RedirectType } from 'next/navigation'

export default function Cassette() {
    redirect('/', RedirectType.replace);
    return (<></>);
}