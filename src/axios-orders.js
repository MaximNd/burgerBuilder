import axios from 'axios';

export default axios.create({
    baseURL: 'https://burger-builder-react-13dd6.firebaseio.com/'
});