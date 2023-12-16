export default function BannerContent() {
  return (
    <div className="w-full lg:h-[80vh] bg-cover grid lg:grid-cols-4  grid-cols-5 lg:mt-16 mt-24 py-8 lg:p-0 bg-no-repeat bg-right lg:bg-[url('/banner.jpg')] bg-[url('/bannerop.jpg')]">
      <div className="col-start-1 lg:col-end-3 col-end-6 flex flex-col lg:gap-14 gap-8 px-4 lg:px-20 my-auto">
        <h2 className="lg:text-5xl font-extrabold text-bege-400 text-xl ">
          Cílios deslumbrantes, unhas impecáveis. Uma jornada de beleza única.
        </h2>
        <p className="lg:text-2xl text-sm font-light text-bege-100 !leading-relaxed">
          Explore o melhor dos cílios e das unhas conosco. Dos olhos radiantes às mãos impecáveis, oferecemos cuidados especializados para elevar sua beleza única. Descubra como realçar seu estilo com confiança.
        </p>
        <a className="w-fit px-4 lg:px-28 py-2 lg:py-3 lg:text-xl bg-bege-400 hover:bg-bege-100 text-bege-800 shadow-md uppercase rounded-lg font-bold mx-auto" href="">Reservar Horário</a>
      </div>
    </div>
  );
}
