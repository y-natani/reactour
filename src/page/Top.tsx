import React, { useMemo, useState } from 'react'
import { Box, Button, Container, Grid, makeStyles } from '@material-ui/core'

import Cassette from 'src/component/organism/Cassette'

import Tour from 'reactour'

// import { tourConfig } from 'src/constant'

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
  const tourConfig: any = [
    {
      selector: '.explanation',
      content: () => `aaaa`,
      position: 'left',
    },
    {
      selector: '.title',
      content: `And this is our cool bus...`,
      position: 'left',
    },
    {
      selector: '.aaa',
      content: `And this is our cool bus...`,
      position: 'right',
    },
  ]
  const [showTour, setShowTour] = useState(false)
  const [showSimpleTour, setShowSimpleTour] = useState(false)
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
            <Button
              variant="contained"
              color="primary"
              onClick={() => setShowTour(true)}
            >
              デフォルト
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setShowSimpleTour(true)}
            >
              カスタム
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
      <div className="aaa">aaa</div>
      <Tour
        onRequestClose={() => setShowTour(false)}
        steps={tourConfig}
        isOpen={showTour}
        // maskClassName="mask"
        className="helper"
        rounded={0}
        accentColor={'red'}
      />

      <Tour
        onRequestClose={() => setShowSimpleTour(false)}
        steps={tourConfig}
        isOpen={showSimpleTour}
        maskClassName="mask"
        className="helper"
        rounded={20}
        accentColor={'red'}
        disableDotsNavigation={true} // クリックができなくなるだけで、レイアウトとしては存在
        disableInteraction={false}
        lastStepNextButton={<button>Done! Lets start playing</button>}
        maskSpace={0}
        scrollDuration={100}
        showButtons={false}
        showCloseButton={false}
        showNavigation={false}
        showNavigationNumber={false}
        showNumber={false}
      />
    </div>
  )
}
