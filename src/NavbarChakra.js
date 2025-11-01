import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaSun, FaMoon, FaSearch } from 'react-icons/fa';
import {
  Flex,
  Box,
  Input,
  IconButton,
  useColorMode,
  useColorModeValue,
  Heading,
  Button,
  Link,
} from '@chakra-ui/react';

const NavbarChakra = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = useColorModeValue(<FaMoon />, <FaSun />);

  return (
    <Box as="nav" py={4}>
      <Flex className="container" align="center" justify="space-between">
        <Flex align="center" gap={6}>
          <Heading as={RouterLink} to="/" size="md" color="purple.300">Pariksha</Heading>
          <Flex gap={4} align="center">
            <Link as={RouterLink} to="/">Home</Link>
            <Link as={RouterLink} to="/leaderboard">Leaderboard</Link>
          </Flex>
        </Flex>

        <Flex align="center" gap={4}>
          <Flex align="center" bg="rgba(255,255,255,0.02)" px={3} py={1} borderRadius={8}>
            <FaSearch style={{ color: 'var(--muted)', marginRight: 8 }} />
            <Input placeholder="Search tests" variant="unstyled" color="inherit" />
          </Flex>
          <IconButton aria-label="Toggle color mode" icon={icon} onClick={toggleColorMode} />
          <Button variant="ghost" size="sm">by Pruthviraj</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavbarChakra;
