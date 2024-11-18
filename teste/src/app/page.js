import Image from "next/image";
import styles from "./page.module.css";
import HeaderPage from "./header";
import Link from 'next/link'


export default function Home() {
  return (
    <>
    <HeaderPage/>
    <div className="box-cont">
    <div className="box">
    <h1>Hello World</h1>
    <p>Bem vindo a pagina inicial</p>
    </div>
    </div>
    </>
  );
}
