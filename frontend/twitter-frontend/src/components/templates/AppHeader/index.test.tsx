import renderer from 'react-test-renderer'
import Header from './index'

test('header template', () => {
  const component = renderer.create(<Header />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
