import { Box, Heading, Text, FormControl, FormLabel, Input, Button, Select, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Admin = () => {
  const [storeName, setStoreName] = useState("");
  const [industry, setIndustry] = useState("");
  const [stores, setStores] = useState([]);
  const [industries, setIndustries] = useState(["キャバクラ", "ラウンジ", "ガールズバー", "デリヘル", "ソープ", "メンズエステ", "ピンサロ"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, e.g., sending data to an API
    console.log("Store Name:", storeName);
    console.log("Industry:", industry);
    setStores([...stores, { name: storeName, industry }]);
    setStoreName("");
    setIndustry("");
  };

  return (
    <Box p={4}>
      <Heading>管理者ページ</Heading>
      <Text>投稿、店舗情報、ユーザーを管理する。</Text>
      <Box mt={8}>
        <Heading size="md">店舗を追加</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="storeName" isRequired mt={4}>
            <FormLabel>店舗名</FormLabel>
            <Input
              type="text"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
            />
          </FormControl>
          <FormControl id="industry" isRequired mt={4}>
            <FormLabel>業界</FormLabel>
            <Select
              placeholder="業界を選択"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              {industries.map((ind, index) => (
                <option key={index} value={ind}>{ind}</option>
              ))}
            </Select>
          </FormControl>
          <Button mt={4} colorScheme="teal" type="submit">
            店舗を追加
          </Button>
        </form>
      </Box>
      <Box mt={8}>
        <Heading size="md">店舗リスト</Heading>
        <VStack spacing={4} align="stretch">
          {stores.map((store, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="lg">
              <Text><strong>店舗名:</strong> {store.name}</Text>
              <Text><strong>業界:</strong> {store.industry}</Text>
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default Admin;