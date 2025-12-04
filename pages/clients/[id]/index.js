import { useRouter } from "next/router";

function ClientProjectsPage({ params }) {
  const router = useRouter();
  console.log(router.query.id);
  return <div>ClientPage</div>;
}

export default ClientProjectsPage;
