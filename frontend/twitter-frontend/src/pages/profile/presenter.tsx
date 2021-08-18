export type Props = {
  userId: number
}

const Presenter: React.VFC<Props> = ({ userId }) => {
  return (
    <main>
      <h1>{userId}</h1>
    </main>
  )
}

export default Presenter
