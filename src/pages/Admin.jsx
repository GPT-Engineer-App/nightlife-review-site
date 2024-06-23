import { Box, Heading, Text, FormControl, FormLabel, Input, Button, Select, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Admin = () => {
  const [storeName, setStoreName] = useState("");
  const [industry, setIndustry] = useState("");
  const [stores, setStores] = useState([]);
  const [industries, setIndustries] = useState(["Cabaret Club", "Lounge", "Girls Bar", "Delivery Health", "Soapland", "Men's Esthetic", "Pink Salon"]);

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
      <Heading>Admin Page</Heading>
      <Text>Manage posts, store information, and users.</Text>
      <Box mt={8}>
        <Heading size="md">Add Store</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="storeName" isRequired mt={4}>
            <FormLabel>Store Name</FormLabel>
            <Input
              type="text"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
            />
          </FormControl>
          <FormControl id="industry" isRequired mt={4}>
            <FormLabel>Industry</FormLabel>
            <Select
              placeholder="Select industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              {industries.map((ind, index) => (
                <option key={index} value={ind}>{ind}</option>
              ))}
            </Select>
          </FormControl>
          <Button mt={4} colorScheme="teal" type="submit">
            Add Store
          </Button>
        </form>
      </Box>
      <Box mt={8}>
        <Heading size="md">Store List</Heading>
        <VStack spacing={4} align="stretch">
          {stores.map((store, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="lg">
              <Text><strong>Store Name:</strong> {store.name}</Text>
              <Text><strong>Industry:</strong> {store.industry}</Text>
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default Admin;