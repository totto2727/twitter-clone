import renderer from 'react-test-renderer'
import Home from './index'

test('home page', () => {
  const component = renderer.create(<Home />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
