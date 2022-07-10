import { useState } from 'react';
import mail from '../assets/mail.png';
import planta from '../assets/planta.png';
import emailjs from '@emailjs/browser';


export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [valid, setValid] = useState(false);

    function handleSubmit(e: any) {
        e.preventDefault();
        console.log(email);
        emailjs.send('gmail', 'template_r4wep5h', {
            email: email
        }, import.meta.env.VITE_API_KEY)
            .then((result) => {
                alert(`Email enviado com sucesso!`)
            }).catch((error) => {
                alert(`Erro ao enviar email!`)
            });
        setEmail('');
    }

    function validateEmail(e: string) {
        setEmail(e);
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        setValid(re.test(e));
    }

    return (
        <div className='flex flex-row'>
            <div className="flex flex-col max-w-xl mt-[150px] font-normal pl-4 leading-relaxed">
                <p className="text-2xl text-orange-200 opacity-60 leading-relaxed">Sua casa com as </p><br />
                <strong className="text-8xl font-black font-dif">melhores plantas</strong>
                <b className="text-base text-orange-200 opacity-60 pt-10 leading-relaxed w-[480px]">
                    Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia.
                    Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
                </b>
                <form className="mt-[40px] flex flex-row" onSubmit={handleSubmit}>
                    <div className='flex flex-row shadow-md bg-white'>
                        <div className="h-[75px] w-[55px] flex items-center justify-center">
                            <img src={mail} alt="mail" />
                        </div>
                        <input type="email" placeholder="Insira seu e-mail" className="h-[75px] w-[336px] pl-3" value={email}
                            onChange={(e) => validateEmail(e.target.value)} required />

                    </div>
                    <button type='submit' disabled={!valid} className="w-[194px] text-white bg-orange-300 h-[75px] text-base shadow-btn disabled:bg-gray-100 disabled:shadow-md">Assinar newsletter</button>
                </form>
            </div>
            <img src={planta} alt="planta" className='mt-14' />
        </div>
    )
}