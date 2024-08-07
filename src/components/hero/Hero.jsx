// import style from './Button.jsx'
import { Button } from '../button/Button';
import style from './Hero.module.css';
import logo from '/vite.svg'

export function Hero(){
    const imgStyle={
  height: '24rem',
  width:"100%",
};

const title='Vite Next Generation Fronted Tooling'


return (
        <section className={style.hero}>
      <div className={style.textContent}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.description}>Get ready for a development environment that can finally catch up with you.</p>
        <div className={style.btnList}>
         <Button url="#" text="Get started" />
         <Button url="#" text="Why Vite?" />
         <Button url="#" text="View on Github" />
         <Button url="#" text="⚡ ViteConf 24!" />

          {/* <a className={style.btn} href="#">Get Started</a>
          <a className={style.btn} href="#">Why Vite</a>
          <a className={style.btn} href="#">View on GitHub</a>
          <a className={style.btn} href="#"> ⚡️ ViteConf 24!</a> */}
        </div>
      </div>
      <img src={logo}style={imgStyle} alt="Vite Logo" />
    </section>
    );
}