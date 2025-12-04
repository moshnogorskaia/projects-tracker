import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();
  console.log(router.query.id);
  console.log(router.query.clientprojectid);
  return <div>SelectedClientProjectPage</div>;
}

export default SelectedClientProjectPage;
