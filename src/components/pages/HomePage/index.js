
import React from 'react'
import AppBar from 'material-ui/AppBar'
import GridContainer from '../../../containers/tablecontainer'

const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
]
const HomePage = () => {
  return (
    <div>
      <AppBar title="Arc" />
      <GridContainer />
    </div>
  )
}
export default HomePage
