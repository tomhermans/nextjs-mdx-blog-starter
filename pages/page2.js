import Wrapper from "../src/layout/Wrapper"
import About from "../src/views/Page2"
import config from "../blog.config.js"

const Page2 = () => (
  <Wrapper
    url="/about"
    title={config.title + " | Page2"}
    description={"Learn more about " + config.title}
    imageUrl={config.shareImage}
    imageAlt={config.shareImageAlt}
  >
    <About />
  </Wrapper>
)

export default Page2
