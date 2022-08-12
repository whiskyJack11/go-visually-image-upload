import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import UploadImage from './components/uploadImage/UploadImage';
import Images from './components/images/Images';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <UploadImage />
        <Images />
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
