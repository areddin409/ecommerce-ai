import { ClerkProvider } from "@clerk/nextjs"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <main>{children}</main>
    </ClerkProvider>
  )
}

export default Layout
