import React from 'react'

export default function ServicesContent() {
  return (
    <div className="bg-vermelho-500 lg:p-10 py-8 px-4 flex flex-col gap-14 text-center" id='servicos'>
      <h1 className="lg:w-1/2 mx-auto text-center lg:text-4xl font-extrabold text-bege-100 text-xl ">Nossos serviços</h1>
      <div className='w-1/2 mx-auto flex lg:flex-row flex-col lg:gap-0 gap-10 justify-between'>
        <div className="border-8 border-bege-100 bg-[url('/cilios.jpg')] bg-cover h-96 w-[230px]">
          <div className='bg-bege-100 mx-2 h-12   font-extrabold text-vermelho-500 relative top-[350px] text-sm flex items-center justify-center'> EXTENSÃO DE CÍLIOS</div>
        </div>
        <div className="border-8 border-bege-100 bg-[url('/alongamento.jpg')] bg-cover h-96 w-[230px]">
          <div className='bg-bege-100 mx-2 h-12   font-extrabold text-vermelho-500 relative top-[350px] text-sm flex items-center justify-center'> ALONGAMENTO EM ACRÍLICO</div>
        </div>
        <div className="border-8 border-bege-100 bg-[url('/depilacao.jpg')] bg-cover h-96 w-[230px]">
          <div className='bg-bege-100 mx-2 h-12 font-extrabold text-vermelho-500 relative top-[350px] text-sm flex items-center justify-center'> DEPILAÇÃO</div>
        </div>

      </div>
    </div>
  )
}
