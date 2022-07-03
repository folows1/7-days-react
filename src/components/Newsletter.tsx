import mail from '../assets/mail.png';
import planta from '../assets/planta.png';

export default function Newsletter() {
    return (
        <div className='flex flex-row'>
            <div className="flex flex-col max-w-xl mt-[150px] font-normal pl-4 leading-relaxed">
                <p className="text-2xl text-orange-200 opacity-60 leading-relaxed">Sua casa com as </p><br />
                <strong className="text-8xl font-black font-dif">melhores plantas</strong>
                <b className="text-base text-orange-200 opacity-60 pt-10 leading-relaxed w-[480px]">
                    Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia.
                    Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
                </b>
                <form className="mt-[40px] flex flex-row">
                    <div className='flex flex-row shadow-md bg-white'>
                        <div className="h-[75px] w-[55px] flex items-center justify-center">
                            <img src={mail} alt="mail" />
                        </div>
                        <input type="email" placeholder="Insira seu e-mail" className="h-[75px] w-[336px] pl-3" />
                    </div>
                    <button className="w-[194px] text-white bg-orange-300 h-[75px] text-base shadow-btn">Assinar newsletter</button>
                </form>
            </div>
            <img src={planta} alt="planta" className='mt-14'/>
        </div>
    )
}