import { Link, List, ListItem } from "@mui/joy";
import NextLink from "next/link";

export function NavBar() {
    return (
        <header>
            <nav className="navigation">
                <List
                    orientation="horizontal"
                    sx={{
                        bgcolor: "background.body",
                        borderRadius: "4px",
                        maxWidth: "fit-content",
                        "--ListItem-radius": "8px",
                    }}
                >
                    <ListItem>
                        <NextLink href="/dashboard" legacyBehavior passHref>
                            <Link color="primary" variant="solid">
                                Dashboard
                            </Link>
                        </NextLink>
                    </ListItem>

                    <ListItem>
                        <NextLink href="/signout" legacyBehavior passHref>
                            <Link color="neutral" variant="solid">
                                Sign off
                            </Link>
                        </NextLink>
                    </ListItem>
                </List>
            </nav>
        </header>
    );
}
