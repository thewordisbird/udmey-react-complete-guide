import Link from 'next/link'

const indexPage = () => (
  <div>
    <h1>Oops, something went worng.</h1>
    <p>tyr <Link href="/"><a>going back</a></Link></p>
    
  </div>
);

export default indexPage;