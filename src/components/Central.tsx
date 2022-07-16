import plantac from '../assets/plantac.png';

export default function Central() {
    return (

        <div className="flex flex-row max-w-[995px] h-[440px] shadow-md mx-auto mb-11 bg-white">
            <img src={plantac} alt="planta" />
            <div className="flex flex-col mt-[58px] ml-[32px]">
                <p className='text-2xl text-orange-200 opacity-60 pb-3'>Como conseguir</p>
                <strong className='text-4xl font-black font-dif mb-[32px]'>minha planta</strong>
                <div className='flex flex-row mb-8 items-center'>
                    <span className='w-[52px] h-[52px] bg-orange-300 rounded-full'></span>
                    <p className='text-2xl text-orange-200 opacity-60  pl-4'>Escolha suas plantas</p>
                </div>
                <div className='flex flex-row mb-8 items-center'>
                    <span className='w-[52px] h-[52px] bg-orange-300 rounded-full'></span>
                    <p className='text-2xl text-orange-200 opacity-60 pl-4'>Faça seu pedido</p>
                </div>
                <div className='flex flex-row mb-8 items-center'>
                    <span className='w-[52px] h-[52px] bg-orange-300 rounded-full'></span>
                    <p className='text-2xl text-orange-200 opacity-60 pl-4'>Aguarde na sua casa</p>
                </div>
            </div>
        </div>
    )
}