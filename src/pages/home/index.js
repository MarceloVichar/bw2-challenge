import {
  Box,
  Text,
  Flex,
  Image,
  Avatar,
  Grid,
  Button,
  Divider,
  useDisclosure,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { api } from "../../services/api";

export const Home = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [user, setUser] = useState({});

  useEffect(() => {
    searchUser();
  }, []);

  const searchUser = async () => {
    const {
      data: { results },
    } = await api.get("");
    const [returnedUser] = results;
    setUser(returnedUser);
  };

  console.log(user);

  return (
    <>
      <Box
        border="1px solid black"
        bg="purple.500"
        w="100%"
        h="5rem"
        boxShadow="-1px -2px 15px 7px rgba(0,0,0,0.35)"
      >
        <Box
          maxW={1280}
          mx="auto"
          px="5"
          h="100%"
          display="flex"
          alignItems="center"
        >
          <Text fontSize="xl" fontWeight="500" color="white">
            users_like.me
          </Text>
        </Box>
      </Box>

      <Flex bg="purple.500" zIndex="auto" h="10rem" justify="center">
        <Text p="1rem" color="white" fontSize="32">
          Find new users like your
        </Text>
      </Flex>
      {!user.name ? (
        <Box
          h="500px"
          display="flex"
          maxW="1280px"
          mx="auto"
          justifyContent="center"
          alignItems="center"
        >
          <Spinner colorScheme="purple" size="lg" />
        </Box>
      ) : (
        <>
          <Box
            maxW="1280px"
            mx="auto"
            overflow="hidden"
            mt="-80px"
            bg="white"
            borderRadius="2px"
            boxShadow="0px 5px 7px 0px rgba(0,0,0,0.3)"
          >
            <Box
              height="200px"
              overflow="hidden"
              filter="blur(30px)"
              display="flex"
              alignItems="center"
            >
              <Image
                src={user.picture.thumbnail}
                w="100%"
                backgroundSize="cover"
              />
            </Box>
            <Flex justify="center" mt="-160px">
              <Avatar
                src={user.picture.large}
                name={`${user.name.first} ${user.name.last}`}
                w="200px"
                h="200px"
                border="6px solid white"
                size="2xl"
              />
            </Flex>
            <Grid templateColumns="repeat(3, 1fr)" gap={6} mt="1rem">
              <Box></Box>
              <Flex justify="center">
                <Button colorScheme="blue" w="120px">
                  Follow
                </Button>
              </Flex>
              <Flex justify="flex-end">
                <Button colorScheme="gray" mr="2">
                  Try the next one
                </Button>
              </Flex>
            </Grid>
            <Flex direction="column" justify="center" m="1rem">
              <Text textAlign="center" fontSize="24" fontWeight="500">
                {`${user.name.title}. ${user.name.first} ${user.name.last}`}
              </Text>
              <Text textAlign="center" fontWeight="500">
                {`${user.location.city}, ${user.location.country}`}
              </Text>
            </Flex>
          </Box>
          <Grid
            templateColumns="repeat(2, 1fr)"
            maxW="1280px"
            mx="auto"
            gap="6"
            mt="1rem"
          >
            <Grid
              direction="column"
              bg="white"
              borderRadius="2px"
              boxShadow="0px 5px 7px 0px rgba(0,0,0,0.3)"
              p="1rem"
              gap="3"
            >
              <Text display="inline-block" fontWeight="500" fontSize="20px">
                Personal Info
              </Text>
              <Text>Born at: {user.location.city}</Text>
              <Text>Age: {user.dob.age}</Text>
              <Divider borderColor="gray.300" />
              <Button
                pl="0"
                justifyContent="flex-start"
                leftIcon={isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                bg="transparent"
                onClick={onToggle}
                w="fit-content"
                _hover={{
                  bg: "transparent",
                  color: "teal.500",
                }}
                _focus={{
                  border: "none",
                }}
                _active={{
                  bg: "transparent",
                }}
              >
                See more
              </Button>
            </Grid>
            <Grid
              direction="column"
              bg="white"
              borderRadius="2px"
              boxShadow="0px 5px 7px 0px rgba(0,0,0,0.3)"
              p="1rem"
              gap="3"
            >
              <Text display="inline-block" fontWeight="500" fontSize="20px">
                Contact info
              </Text>
              <Text>email: {user.email}</Text>
              <Text>phone: {user.phone}</Text>
              <Divider borderColor="gray.300" />
              <Button
                pl="0"
                justifyContent="flex-start"
                leftIcon={isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                bg="transparent"
                onClick={onToggle}
                w="fit-content"
                _hover={{
                  bg: "transparent",
                  color: "teal.500",
                }}
                _focus={{
                  border: "none",
                }}
                _active={{
                  bg: "transparent",
                }}
              >
                See more
              </Button>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};
