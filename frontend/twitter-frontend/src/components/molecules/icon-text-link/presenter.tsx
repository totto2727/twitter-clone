import LinkIcon from '../../atoms/icon-link'
import { IconLinkProps } from '../../atoms/icon-link/presenter'

export type IconTextLinkProps = Omit<IconLinkProps, 'children'> & {
  text?: string
  textStyle?: string
}

const Presenter = ({ text, textStyle, ...props }: IconTextLinkProps) => {
  return (
    <LinkIcon {...props}>
      <p className={textStyle}>{text}</p>
    </LinkIcon>
  )
}

export default Presenter
