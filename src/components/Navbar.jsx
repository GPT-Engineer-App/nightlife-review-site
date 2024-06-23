import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="gray.800" color="white" px={4}>
    <Flex h={16} alignItems="center" justifyContent="space-between">
      <Box>ナイトライフレビュー</Box>
      <Flex alignItems="center">
        <RouterLink to="/"><Link px={2}>ホーム</Link></RouterLink>
        <RouterLink to="/キャバクラ"><Link px={2}>キャバクラ</Link></RouterLink>
        <RouterLink to="/ラウンジ"><Link px={2}>ラウンジ</Link></RouterLink>
        <RouterLink to="/ガールズバー"><Link px={2}>ガールズバー</Link></RouterLink>
        <RouterLink to="/デリヘル"><Link px={2}>デリヘル</Link></RouterLink>
        <RouterLink to="/ソープ"><Link px={2}>ソープ</Link></RouterLink>
        <RouterLink to="/メンズエステ"><Link px={2}>メンズエステ</Link></RouterLink>
        <RouterLink to="/ピンサロ"><Link px={2}>ピンサロ</Link></RouterLink>
        <RouterLink to="/新規投稿"><Link px={2}>新規投稿</Link></RouterLink>
        <RouterLink to="/ユーザープロフィール"><Link px={2}>ユーザープロフィール</Link></RouterLink>
        <RouterLink to="/管理者"><Link px={2}>管理者</Link></RouterLink>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;