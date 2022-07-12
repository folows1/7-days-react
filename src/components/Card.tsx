import produto from '../assets/produto.png';
import seta from '../assets/seta.png';

export default function Card() {


    return (
        <div className="flex flex-row items-end max-w-[380px] min-h-[200px] shadow-lg hover:shadow-orange-300 hover:cursor-pointer">
            <div className='w-[53,94%]'>
                <img src={produto} alt="Plantac" />
            </div>
            <div className='flex flex-col'>
                <strong className="text-3xl font-black font-dif mt-[27px]">Ajuga reptans</strong>
                <p className="text-base mt-[8px] opacity-60 text-orange-200">R$ 20,00</p>
                <div className='flex flex-row justify-between w-[110px] mt-[24px] mb-[27px] items-center'>
                    <p className='text-base text-orange-300'>Comprar</p>
                    <img src={seta} alt="seta" className='h-[8px] w-[14px]' />
                </div>
            </div>
        </div>
    )
}