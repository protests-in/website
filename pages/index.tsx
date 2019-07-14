import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Header from '../components/layout/Header';

export default function App() {
  return (
      <Box my={4} textAlign="center">
        <Typography variant="h4" component="h1" gutterBottom>
          Start a protest
        </Typography>
      </Box>
  );
}
