import { Link, List, ListItem } from "@mui/joy";
import NextLink from "next/link";

export function NavBar() {
  return (
    <header>
      <nav>
        <List orientation="horizontal">
          <ListItem>
            <NextLink href="/dashboard">
              <Link color="primary" variant="solid" component="button">
                Dashboard
              </Link>
            </NextLink>
          </ListItem>

          <ListItem>
            <NextLink href="/signout">
              <Link color="neutral" variant="solid" component="button">
                Sign out
              </Link>
            </NextLink>
          </ListItem>
        </List>
      </nav>
    </header>
  );
}
