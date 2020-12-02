import React from 'react'
import { Box, Button, Container, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  cassette: {
    height: 400,
    width: 700,
  },
  img: {
    height: 300,
  },
}))

export default () => {
  const classes = useStyles()
  return (
    <Container>
      <Box m={2} border={1} className={classes.cassette}>
        <div className="title">宿名</div>
        <Grid container>
          <Grid item xs={7}>
            <Box border={1} className={classes.img}>
              画像
            </Box>
          </Grid>
          <Grid item xs={5}>
            <p className="explanation">
              説明文〜〜〜〜〜〜〜〜〜〜〜
              <br />
              ~~~~~~~~~~~~~~~~~~~~
              <br />
              ~~~~~~~~~~
            </p>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
