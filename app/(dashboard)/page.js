import Image from "next/image";

export default function Home(){
    return <div className="h-[100vh] flex flex-col items-center">
        <div>
            <Image src="/images/logo-sistema-web-pro-max.png"
            width={300}
            height={300}
            className="bg-zinc-900 block mx-auto p-2 rounded-md"
            />

            <p className="mt-10 text-center">Ola João Zimila Seja bem vindo(a) de volta</p>
        </div>
    </div>
}