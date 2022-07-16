import produto from '../assets/produto.png';
import seta from '../assets/seta.png';
import { IPlanta } from '../interfaces/IPlanta';

interface Props {
    planta: IPlanta;
}

export default function Card({ planta }: Props) {

    return (
        <div className="flex flex-row items-end w-[380px] h-[200px] shadow-xl bg-white hover:shadow-orange-300 hover:cursor-pointer">
            <div className='min-w-[204px] max-w-[204px]'>
                <img src={produto} alt="Plantac" />
            </div>
            <div className='flex flex-col'>
                <strong className="text-3xl font-black font-dif mt-[27px]">{planta.name}</strong>
                <p className="text-base mt-[8px] opacity-60 text-orange-200">R$ {planta.preco.toFixed(2).replace('.', ',')}</p>
                <div className='flex flex-row justify-between w-[110px] mt-[24px] mb-[27px] items-center'>
                    <p className='text-base text-orange-300'>Comprar</p>
                    <img src={seta} alt="seta" className='h-[8px] w-[14px]' />
                </div>
            </div>
        </div>
    )
}