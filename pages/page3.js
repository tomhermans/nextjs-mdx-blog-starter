import Wrapper from "../src/layout/Wrapper"
import View3 from "../src/views/View3"
import config from "../blog.config.js"
import Layout from "../src/layout/Layout"

const Page3 = () => (
  <Layout
    url="/page3"
    title={config.title + " | Page3"}
    description={"Learn more about " + config.title}
    imageUrl={config.shareImage}
    imageAlt={config.shareImageAlt}
  >
    <View3 />
  </Layout>
)

export default Page3
