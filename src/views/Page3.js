import { MDXProvider } from "@mdx-js/react"
import MarkdownContent from "../mdx/page3.mdx"
import Container from "../ui/Container"

const Page3 = (props) => {
  return (
    <MDXProvider>
      <Container>
        <MarkdownContent />
      </Container>
    </MDXProvider>
  )
}

export default Page3
