import { Box, Text } from "theme-ui"
import ThemeToggle from "../ui/ThemeToggle"

const Footer = (props) => (
  <Box
    sx={{
      p: 4,
      color: "#666",
      textAlign: "center",
      fontSize: 1,
    }}
  >
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Created by <a href="https://twitter.com/tomhermans">Tom Hermans</a>
    </Text>

    <Text sx={{ mx: 3, display: "inline-block" }}>
      Follow <a href="https://twitter.com/tomhermans">@tomhermans</a>
    </Text>
  </Box>
)

export default Footer
