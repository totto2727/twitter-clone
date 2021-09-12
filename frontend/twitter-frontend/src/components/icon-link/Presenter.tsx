import Link from 'next/link'
import type { IconBaseProps, IconType} from 'react-icons'

export type IconLinkProps = {
  url: string
  Icon: IconType,
  iconProps?: IconBaseProps
  className?: string
  children?: React.ReactNode
}

const Presenter = ({
  url,
  Icon,
  iconProps,
  className,
  children,
}: IconLinkProps) => {
  return (
    <Link href={url}>
      <a className={className}>
        <Icon {...iconProps}/>
        {children}
      </a>
    </Link>
  )
}

export default Presenter
