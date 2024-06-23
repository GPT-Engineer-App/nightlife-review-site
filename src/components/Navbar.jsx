import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="gray.800" color="white" px={4}>
    <Flex h={16} alignItems="center" justifyContent="space-between">
      <Box>Nightlife Reviews</Box>
      <Flex alignItems="center">
        <RouterLink to="/"><Link px={2}>Home</Link></RouterLink>
        <RouterLink to="/cabaret-club"><Link px={2}>Cabaret Club</Link></RouterLink>
        <RouterLink to="/lounge"><Link px={2}>Lounge</Link></RouterLink>
        <RouterLink to="/girls-bar"><Link px={2}>Girls Bar</Link></RouterLink>
        <RouterLink to="/delivery-health"><Link px={2}>Delivery Health</Link></RouterLink>
        <RouterLink to="/soapland"><Link px={2}>Soapland</Link></RouterLink>
        <RouterLink to="/mens-esthetic"><Link px={2}>Men's Esthetic</Link></RouterLink>
        <RouterLink to="/pink-salon"><Link px={2}>Pink Salon</Link></RouterLink>
        <RouterLink to="/new-post"><Link px={2}>New Post</Link></RouterLink>
        <RouterLink to="/user-profile"><Link px={2}>User Profile</Link></RouterLink>
        <RouterLink to="/admin"><Link px={2}>Admin</Link></RouterLink>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;