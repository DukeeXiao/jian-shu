import axios from 'axios'
import * as constants from './constants'

const changeLogin = (result) => ({
  type: constants.CHANGE_LOGIN,
  isLog: true
});

export const toLogin = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
      const result = res.data.data;
      if (result) {
        dispatch(changeLogin());
      }else {
        alert('登录失败！');
      }
    })
  }
};

export const toLogout = () => ({
  type: constants.CHANGE_LOGOUT,
  isLog: false
});

