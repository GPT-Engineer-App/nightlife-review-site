import { Container, Text, VStack, Button, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">ナイトライフレビューへようこそ</Text>
        <Text>様々なナイトライフ業界のレビューと評価を探る。</Text>
        <RouterLink to="/キャバクラ">
          <Button colorScheme="teal" variant="solid">キャバクラ</Button>
        </RouterLink>
        <RouterLink to="/ラウンジ">
          <Button colorScheme="teal" variant="solid">ラウンジ</Button>
        </RouterLink>
        <RouterLink to="/ガールズバー">
          <Button colorScheme="teal" variant="solid">ガールズバー</Button>
        </RouterLink>
        <RouterLink to="/デリヘル">
          <Button colorScheme="teal" variant="solid">デリヘル</Button>
        </RouterLink>
        <RouterLink to="/ソープ">
          <Button colorScheme="teal" variant="solid">ソープ</Button>
        </RouterLink>
        <RouterLink to="/メンズエステ">
          <Button colorScheme="teal" variant="solid">メンズエステ</Button>
        </RouterLink>
        <RouterLink to="/ピンサロ">
          <Button colorScheme="teal" variant="solid">ピンサロ</Button>
        </RouterLink>
      </VStack>
    </Container>
  );
};

export default Index;