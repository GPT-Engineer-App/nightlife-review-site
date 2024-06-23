import { Box, Heading, Text, FormControl, FormLabel, Input, Button, Select } from "@chakra-ui/react";
import { useState } from "react";

const Admin = () => {
  const [storeName, setStoreName] = useState("");
  const [industry, setIndustry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, e.g., sending data to an API
    console.log("Store Name:", storeName);
    console.log("Industry:", industry);
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
              <option value="Cabaret Club">Cabaret Club</option>
              <option value="Lounge">Lounge</option>
              <option value="Girls Bar">Girls Bar</option>
              <option value="Delivery Health">Delivery Health</option>
              <option value="Soapland">Soapland</option>
              <option value="Men's Esthetic">Men's Esthetic</option>
              <option value="Pink Salon">Pink Salon</option>
            </Select>
          </FormControl>
          <Button mt={4} colorScheme="teal" type="submit">
            Add Store
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Admin;