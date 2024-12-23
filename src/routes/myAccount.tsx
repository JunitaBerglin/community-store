import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/myAccount')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/myAccount"!</div>
}
