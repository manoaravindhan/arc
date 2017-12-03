import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import React from 'react'
import Grid from '../components/common/table'
import { loadGridData } from '../actions/gridactions'

const propTypes = {
  loadGridData: PropTypes.func,
  content: PropTypes.array,
}

class GridContainer extends React.Component {
  componentDidMount() {
    this.props.loadGridData()
  }
  render() {
    return (
      <Grid
        store={this.props.content}
      />
    )
  }
}
function mapStateToProps(state) {
  return {
    content: state.grid.content,
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    loadGridData,
  }, dispatch)
}

GridContainer.propTypes = propTypes

export default connect(mapStateToProps, matchDispatchToProps)(GridContainer)
