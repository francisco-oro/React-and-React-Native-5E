import { Height } from '@mui/icons-material'
import { Grid, Paper, Typography } from '@mui/material';
import { Stack, styled } from '@mui/system';
import React from 'react'

const headerFooterStyle = {
  textAlign: "center",
  height: 50,
};
const mainStyle = {
  textAlign: "center",
  padding: "8px 16px"
};

const Item = styled(Paper)(() => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})) 

const App = () => {
  return (
    <Grid container spacing={2} sx={{ backgroundColor: "#F3F6F9"}}>
      <Grid xs={12}>
        <Item sx={headerFooterStyle}>
          <Typography sx={mainStyle}>Header</Typography>
        </Item>
      </Grid>

      <Grid xs="auto">
        <Item>
          <Stack spacing={1}>
            <Typography sx={mainStyle}>Nav Item 1</Typography>
            <Typography sx={mainStyle}>Nav Item 2</Typography>
            <Typography sx={mainStyle}>Nav Item 3</Typography>
            <Typography sx={mainStyle}>Nav Item 4</Typography>
          </Stack>
        </Item>
      </Grid>

      <Grid xs>
        <Item>
          <Typography sx={mainStyle}>Main Content</Typography>
        </Item>
      </Grid>

      <Grid xs={12}>
        <Item sx={headerFooterStyle}>
          <Typography sx={mainStyle}>Footer</Typography>
        </Item>
      </Grid>
    </Grid>
  )
}

export default App