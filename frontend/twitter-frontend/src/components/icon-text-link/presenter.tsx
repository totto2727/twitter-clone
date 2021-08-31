import LinkIcon from '../icon-link'
import { IconLinkProps } from '../icon-link/presenter'

export type IconTextLinkProps = Omit<IconLinkProps, 'children'> & {
  text?: string
  textStyle?: string
}

const Presenter = ({ text, textStyle, ...props }: IconTextLinkProps) => {
  return (
    <LinkIcon {...props}>
      {text && <p className={textStyle}>{text}</p>}
    </LinkIcon>
  )
}

export default Presenter
