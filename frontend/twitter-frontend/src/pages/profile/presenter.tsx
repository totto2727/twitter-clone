export type Props = {
  userId: number
}

const Presenter: React.VFC<Props> = ({ userId }) => {
  return (
    <>
      <h1>{userId}</h1>
    </>
  )
}

export default Presenter
