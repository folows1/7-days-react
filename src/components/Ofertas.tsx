import { useEffect, useState } from "react";
import { IPlanta } from "../interfaces/IPlanta";
import Card from "./Card";
import { ArrowUp, ArrowDown } from "phosphor-react";
import classnames from "classnames";

const mock: IPlanta[] = [
    {
        "name": "Ajuga Reptans",
        "preco": 20,
        "ordem": 0
    },
    {
        "name": "Cordyline fruticosa",
        "preco": 35,
        "ordem": 3
    },
    {
        "name": "Crassula ovata",
        "preco": 23.2,
        "ordem": 2
    },
    {
        "name": "Cyperus rotundus",
        "preco": 55,
        "ordem": 1
    },
    {
        "name": "Echinacea purpurea",
        "preco": 55,
        "ordem": 1
    },
    {
        "name": "Datura metel",
        "preco": 55,
        "ordem": 1
    },
];

export default function Ofertas() {

    const [priceRange, setPriceRange] = useState<'default' | '25' | '50' | 'max'>('default');
    const [plants, setPlants] = useState(mock);
    const [orderingPrice, setOrderingPrice] = useState(0);
    const [orderingAz, setOrderingAz] = useState(0);

    function descendingPrice() {
        const mockCopy = [...mock];
        setPlants(
            mockCopy.sort((a, b) => b.preco - a.preco)
        )
    }

    function ascendingPrice() {
        const mockCopy = [...mock];
        setPlants(
            mockCopy.sort((a, b) => a.preco - b.preco)
        )
    }

    function descendingAz() {
        const mockCopy = [...mock];
        setPlants(
            mockCopy.sort((a, b) => b.name.localeCompare(a.name))
        )
    }

    function ascendingAz() {
        const mockCopy = [...mock];
        setPlants(
            mockCopy.sort((a, b) => a.name.localeCompare(b.name))
        )
    }

    function changeOrderingPrice(value: number) {
        setOrderingAz(0);
        setPriceRange('default');
        if (value === 2) {
            setPlants(mock);
            setOrderingPrice(0);
        } else {
            if (value === 1) descendingPrice();
            else ascendingPrice();
            setOrderingPrice(value + 1);
        }
    }

    function changeOrderingAz(value: number) {
        setPriceRange('default');
        setOrderingPrice(0);
        if (value === 2) {
            setPlants(mock);
            setOrderingAz(0);
        } else {
            if (value === 1) descendingAz();
            else ascendingAz();
            setOrderingAz(value + 1);
        }
    }

    const priceOrder = [
        <div onClick={() => changeOrderingPrice(0)} className='flex flex-row w-fit p-2 select-none items-center hover:cursor-pointer hover:border-b-2 border-orange-300'>
            Preço
            <ArrowDown size={28} />
        </div>,
        <div onClick={() => changeOrderingPrice(1)} className='flex flex-row w-fit bg-orange-300 p-2 hover:cursor-pointer select-none items-center hover:border-b-2 border-orange-300'>
            Preço
            <ArrowDown size={28} />
        </div>,
        <div onClick={() => changeOrderingPrice(2)} className='flex flex-row w-fit bg-orange-300 p-2 hover:cursor-pointer select-none items-center hover:border-b-2 border-orange-300'>
            Preço
            <ArrowUp size={28} />
        </div>,
    ]

    const azOrder = [
        <div onClick={() => changeOrderingAz(0)} className='flex flex-row w-fit p-2 select-none items-center hover:cursor-pointer hover:border-b-2 border-orange-300'>
            A-Z
            <ArrowDown size={28} />
        </div>,
        <div onClick={() => changeOrderingAz(1)} className='flex flex-row w-fit bg-orange-300 p-2 hover:cursor-pointer select-none items-center hover:border-b-2 border-orange-300'>
            A-Z
            <ArrowDown size={28} />
        </div>,
        <div onClick={() => changeOrderingAz(2)} className='flex flex-row w-fit bg-orange-300 p-2 hover:cursor-pointer select-none items-center hover:border-b-2 border-orange-300'>
            A-Z
            <ArrowUp size={28} />
        </div>,
    ]

    function priceRange25() {
        return (
            <div onClick={() => priceRange === '25' ? setPriceRange('default') : setPriceRange('25')}
                className={classnames('flex flex-row w-[100px] hover:cursor-pointer select-none items-center p-2 justify-center hover:border-b-2 border-orange-300',
                    { 'bg-orange-300': priceRange === '25' })}>
                0 - 25
            </div>
        )
    }

    function priceRange50() {
        return (
            <div onClick={() => priceRange === '50' ? setPriceRange('default') : setPriceRange('50')}
                className={classnames('flex flex-row w-[100px] hover:cursor-pointer select-none items-center p-2 justify-center hover:border-b-2 border-orange-300',
                    { 'bg-orange-300': priceRange === '50' })}>
                25 - 50
            </div>
        )
    }

    function priceRangeMax() {
        return (
            <div onClick={() => priceRange === 'max' ? setPriceRange('default') : setPriceRange('max')}
                className={classnames('flex flex-row w-[100px] hover:cursor-pointer select-none items-center p-2 justify-center hover:border-b-2 border-orange-300',
                    { 'bg-orange-300': priceRange === 'max' })}>
                50 +
            </div>
        )
    }

    useEffect(() => {
        setOrderingAz(0);
        setOrderingPrice(0);
        const mockCopy = [...mock];
        if (priceRange === 'default') {
            setPlants(mockCopy);
        }
        if (priceRange === '25') {
            setPlants(
                mockCopy.filter(plant => plant.preco <= 25)
            )
        }
        if (priceRange === '50') {
            setPlants(
                mockCopy.filter(plant => plant.preco > 25 && plant.preco <= 50)
            )
        }
        if (priceRange === 'max') {
            setPlants(
                mockCopy.filter(plant => plant.preco > 50)
            )
        }
    }, [priceRange]);

    return (
        <>
            <div className="flex flex-row max-w-[1200px] mx-auto mb-11 justify-center">
                <div className="flex flex-col mb-1">
                    <p className="text-2xl text-orange-200 opacity-60 text-center">Conheça nossas</p>
                    <strong className="text-7xl font-black font-dif">ofertas</strong>
                </div>
            </div>
            <div className="flex flex-row max-w-[1200px] mx-auto mb-11 justify-center text-xl h-[50px]">
                {priceOrder[orderingPrice]}
                {azOrder[orderingAz]}
                <div className="flex flex-row ml-14 space-x-5">
                    {priceRange25()}
                    {priceRange50()}
                    {priceRangeMax()}
                </div>
            </div>
            <div className="grid grid-cols-3 gap-[30px] max-w-[1200px] mx-auto mb-[200px]">
                {plants.map((item, index) => (
                    <Card planta={item} key={index} />
                ))}
            </div>
        </>
    )
}