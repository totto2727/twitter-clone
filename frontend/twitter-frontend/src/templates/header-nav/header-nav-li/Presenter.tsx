import IconLink from '@/icon-link'
import { IconLinkProps } from '@/icon-link/Presenter'

export type HeaderNavLiProps = Omit<IconLinkProps, 'children'> & {
  current?: boolean
  text?: string
}

const Presenter = ({
  className,
  text,
  iconProps,
  current,
  ...props
}: HeaderNavLiProps) => {
  const props_: IconLinkProps = {
    className:
      'p-3 flex xl:inline-flex items-center justify-center xl:justify-start gap-8 border transition hover:bg-white hover:bg-opacity-10 duration-300',
    iconProps: {
      size: 26,
      fill: current ?'white':undefined,
      strokeWidth: current ? 20 : 0,
      ...iconProps,
    },
    ...props,
  }
  return (
    <li className={className}>
      <IconLink {...props_}>
        {text && <p className='hidden xl:block text-xl border'>{text}</p>}
      </IconLink>
    </li>
  )
}

export default Presenter
