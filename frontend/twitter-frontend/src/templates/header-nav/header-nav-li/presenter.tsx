import IconTextLink from '@/icon-text-link'
import { IconTextLinkProps } from '@/icon-text-link/presenter'

export type HeaderNavLiProps = Omit<IconTextLinkProps, 'textStyle'> & {current?:boolean}

const Presenter = ({ iconProps, className, ...props }: HeaderNavLiProps) => {
  const props_: IconTextLinkProps = {
    textStyle: 'hidden xl:block text-xl border',
    className: 'p-3 flex xl:inline-flex items-center justify-center xl:justify-start gap-8 border transition hover:bg-white hover:bg-opacity-10 duration-300',
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
