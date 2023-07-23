const NotFound = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[25%] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#D021A1]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>404<span className="text-[#1A78D6]"></span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>That page couldn't be found.<br className="sm:block hidden"/> Are you looking for something else?</p>
        </div>
      </div>

      
    </section>
  )
}

export default NotFound