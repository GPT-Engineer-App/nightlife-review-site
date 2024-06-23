import { Container, Text, VStack, Button, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Nightlife Reviews</Text>
        <Text>Explore reviews and ratings for various nightlife industries.</Text>
        <RouterLink to="/cabaret-club">
          <Button colorScheme="teal" variant="solid">キャバクラ (Cabaret Club)</Button>
        </RouterLink>
        <RouterLink to="/lounge">
          <Button colorScheme="teal" variant="solid">ラウンジ (Lounge)</Button>
        </RouterLink>
        <RouterLink to="/girls-bar">
          <Button colorScheme="teal" variant="solid">ガールズバー (Girls Bar)</Button>
        </RouterLink>
        <RouterLink to="/delivery-health">
          <Button colorScheme="teal" variant="solid">デリヘル (Delivery Health)</Button>
        </RouterLink>
        <RouterLink to="/soapland">
          <Button colorScheme="teal" variant="solid">ソープ (Soapland)</Button>
        </RouterLink>
        <RouterLink to="/mens-esthetic">
          <Button colorScheme="teal" variant="solid">メンズエステ (Men's Esthetic)</Button>
        </RouterLink>
        <RouterLink to="/pink-salon">
          <Button colorScheme="teal" variant="solid">ピンサロ (Pink Salon)</Button>
        </RouterLink>
      </VStack>
    </Container>
  );
};

export default Index;