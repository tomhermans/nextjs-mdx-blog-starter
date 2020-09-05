import { useRouter } from "next/router"
import { Box } from "theme-ui"
import NavLink from "./NavLink"

const Nav = (props) => {
  const router = useRouter()
  return (
    <Box
      as="nav"
      sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <NavLink
        href="/"
        active={router.pathname === "/" || router.pathname.includes("/blog")}
      >
        Blog
      </NavLink>
      <NavLink href="/about" active={router.pathname === "/about"}>
        About / MDXEmbed
      </NavLink>
      <NavLink href="/page2" active={router.pathname === "/page2"}>
        Page2
      </NavLink>
      <NavLink href="/page3" active={router.pathname === "/page3"}>
        P3
      </NavLink>
    </Box>
  )
}

export default Nav
