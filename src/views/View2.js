import { MDXProvider } from "@mdx-js/react"
import MarkdownContent from "../mdx/page2.mdx"
import Container from "../ui/Container"

const View2 = (props) => {
  return (
    <MDXProvider>
      <Container>
        <MarkdownContent />
      </Container>
    </MDXProvider>
  )
}

export default View2
