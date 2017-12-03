import { LOAD_DATA } from '../constants/ActionTypes'
import { fetchData } from '../utils/ApiUtils'
import { GRID_DATA_URL, GET_METHOD } from '../constants/UrlTypes'

export const loadData = payload => ({
  type: LOAD_DATA,
  payload,
})

export const loadGridData = () => (dispatch) => {
  fetchData(GRID_DATA_URL, GET_METHOD)
    .then(() => {
      const response = [{ id: 1, name: 'Mano', gender: 'Male' }, { id: 2, name: 'Siby', gender: 'Male' }]
      dispatch(loadData(response))
    })
}
