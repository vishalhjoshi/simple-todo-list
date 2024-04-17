export default function Page({ params }: { params: { projectId: string } }) {
  return <div>My Project: {params.projectId}</div>
}