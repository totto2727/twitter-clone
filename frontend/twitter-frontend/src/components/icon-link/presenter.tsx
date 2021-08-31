import Link from 'next/link'
import type { IconType, IconBaseProps } from 'react-icons'

export type IconLinkProps = {
  url: string
  Icon: IconType
  className?: string
  iconProps?: IconBaseProps
  children?: React.ReactNode
}

const Presenter = ({
  url,
  Icon,
  className,
  children,
  iconProps,
}: IconLinkProps) => {
  const height=parseFloat(iconProps?.size||26)+parseFloat(iconProps?.strokeWidth)
  return (
    <Link href={url}>
      <a className={className}>
        <Icon {...iconProps} />
        {children}
      </a>
    </Link>
  )
}

export default Presenter
