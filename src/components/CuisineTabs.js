import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import { theme } from '../utils/theme'

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: theme.palette.background.paper
    }
  }
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />)

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: theme.palette.background.paper,
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1
    }
  }
}))((props) => <Tab disableRipple {...props} />)

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(0, 2)
  }
}))

export default function CustomizedTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <StyledTabs
        value={value}
        variant="scrollable"
        aria-label="styled tabs example"
        onChange={handleChange}
      >
        <StyledTab label="Mediterranian" />
        <StyledTab label="Indian" />
        <StyledTab label="American" />
        <StyledTab label="Asian" />
        <StyledTab label="Soups" />
      </StyledTabs>
    </div>
  )
}
