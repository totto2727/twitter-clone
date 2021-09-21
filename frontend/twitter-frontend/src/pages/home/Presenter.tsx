const Presenter = () => {
  return (
    <div>
      <div className={'border-b px-4 py-3'}>
        <span className={'text-xl font-bold'}>Home</span>
      </div>
      <div className={'w-full border p-1'}>
        <form className={'flex'}>
          <div>アイコンwwwww</div>
          <div className={'w-full'}>
            <input
              type='text'
              className={
                'w-full p-3 dark:bg-black border-0 outline-none focus:border-b-[1px] border-alt-white  text-xl'
              }
              placeholder={'いまどうしてる?'}
            />
            <div>navi</div>
          </div>
        </form>
      </div>
      <article>
        <div>
          <div className={'px-4 py-3 border-t border-b flex gap-3'}>
            <div>icon</div>
            <div>
              <div className={'flex gap-2'}>
                <span>name</span>
                <span>id</span>
              </div>
              <div>text</div>
              <div>image</div>
              <div>movie</div>
              <div>card</div>
              <div>このスレッドを表示</div>
            </div>
          </div>
          <p>timeline</p>
        </div>
      </article>
    </div>
  )
}

export default Presenter
