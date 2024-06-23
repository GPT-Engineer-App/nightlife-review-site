import { Box, Heading, Text, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import { useState } from "react";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, e.g., sending data to an API
    console.log("Title:", title);
    console.log("Content:", content);
  };

  return (
    <Box p={4}>
      <Heading>New Post</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="title" isRequired>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl id="content" isRequired mt={4}>
          <FormLabel>Content</FormLabel>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default NewPost;