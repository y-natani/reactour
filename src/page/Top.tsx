import React, { useMemo } from 'react'
import { Box, Button, Container, Grid, makeStyles } from '@material-ui/core'
import Cassette from 'src/component/organism/Cassette'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  wrapper: {
    height: 1400,
  },
  box: {
    height: '100%',
  },
  cassette: {
    height: 500,
    width: 800,
  },
  feature: {
    height: 50,
  },
}))

export default () => {
  const classes = useStyles()
  const renderFeatures = useMemo(() => {
    const featureBox = <Box border={1} m={1} className={classes.feature}></Box>
    const grid = (
      <Grid item xs={3}>
        {featureBox}
      </Grid>
    )
    const html = (
      <Container>
        <Grid container>
          {grid}
          {grid}
          {grid}
          {grid}
        </Grid>
        <Box></Box>
      </Container>
    )
    const tmp = []
    for (let i = 0; i < 10; i++) {
      tmp.push(html)
    }
    return tmp
  }, [])
  return (
    <div>
      <Grid container spacing={3} className={classes.wrapper}>
        <Grid item xs={3}>
          <Box border={1} className={classes.box}>
            <Button variant="contained" color="primary">
              start
            </Button>
            {renderFeatures}
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Box className={classes.box}>
            <Cassette />
            <Cassette />
            <Cassette />
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}
