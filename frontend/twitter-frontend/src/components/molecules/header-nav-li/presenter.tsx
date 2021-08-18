import IconTextLink from '../icon-text-link/index'
import { IconTextLinkProps } from '../icon-text-link/presenter'

export type HeaderNavLiProps = Omit<IconTextLinkProps, 'textStyle'>

const Presenter = ({ iconProps, className, ...props }: HeaderNavLiProps) => {
  const props_: IconTextLinkProps = {
    textStyle: 'hidden xl:block text-xl',
    className: 'flex items-center justify-center xl:justify-between p-3',
    iconProps: { size: 26, ...iconProps },
    ...props,
  }
  return (
    <li {...{ className }}>
      <IconTextLink {...props_} />
    </li>
  )
}

export default Presenter
