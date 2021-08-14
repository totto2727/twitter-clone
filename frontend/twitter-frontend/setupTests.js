// import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
// import Enzyme from 'enzyme'
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17')
const Enzyme = require('enzyme')

Enzyme.configure({ adapter: new Adapter() })
