import Logo from "../assets/Logo";

export default function Header() {
    return (
        <header className="flex w-full flex-row items-center justify-between mt-3 p-0 pl-4 flex-wrap">
            <div>
                <Logo />
            </div>
            <nav>
                <ul className="w-full flex flex-1 list-none text-base flex-row justify-end items-center flex-wrap font-normal">
                    <li>
                        <a href="#" className="inline-block p-2 text-orange-200">Como Fazer</a>
                        /
                    </li>
                    <li>
                        <a href="#" className="inline-block p-2 text-orange-200">Ofertas</a>
                        /
                    </li>
                    <li>
                        <a href="#" className="inline-block p-2 text-orange-200">Depoimentos</a>
                        /
                    </li>
                    <li>
                        <a href="#" className="inline-block p-2 text-orange-200">Vídeos</a>
                        /
                    </li>
                    <li>
                        <a href="#" className="inline-block p-2 ml-7 text-orange-200 font-semibold">Meu Carrinho</a>
                    </li>
                </ul>
            </nav>
        </header>

    )
}