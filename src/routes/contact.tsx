import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      {
        title: "Central Texas Fly Fishing - Contact",
      },
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/contact"!</div>
}
