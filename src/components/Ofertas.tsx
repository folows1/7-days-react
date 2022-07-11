import Card from "./Card"

const mock = [
    {
        "name": "Ajuga Reptans",
        "preco": 20,
        "img": "ajuga01_card",
        "ordem": 0
    },
    {
        "name": "Cordyline fruticosa",
        "preco": 35,
        "img": "fruticosa01_card",
        "ordem": 3
    },
    {
        "name": "Crassula ovata",
        "preco": 23.2,
        "img": "ovata01_card",
        "ordem": 2
    },
    {
        "name": "Cordyline 22222",
        "preco": 55,
        "img": "fruticosa01_card",
        "ordem": 1
    },
    {
        "name": "Cordyline Clrs",
        "preco": 55,
        "img": "fruticosa01_card",
        "ordem": 1
    },
    {
        "name": "Cordyline Sss2",
        "preco": 55,
        "img": "fruticosa01_card",
        "ordem": 1
    },
]

export default function Ofertas() {
    return (
        <>
            <div className="flex flex-row max-w-[1200px] mx-auto mb-11 justify-center">
                <div className="flex flex-col mb-1">
                    <p className="text-2xl text-orange-200 opacity-60 text-center">Conheça nossas</p>
                    <strong className="text-7xl font-black font-dif">ofertas</strong>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-[30px] max-w-[1200px] mx-auto mb-[200px]">
                {mock.map(item => (
                    <Card key={item.name} />
                ))}
            </div>
        </>
    )
}