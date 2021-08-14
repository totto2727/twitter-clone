import renderer from 'react-test-renderer'
import Presenter from './presenter'

test('header presenter', () => {
  const component = renderer.create(<Presenter />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
