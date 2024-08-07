import { Button } from '../button/Button';
import style from './Sponsors.module.css';

export function Sponsors(){
    return(
         <section className={style.sponsors}>
          <Button url="#" text="Sponsor Vite" />
          <Button url="#" text="Sponser Rimantas" />

      {/* <a className = {style.btn} href="#">Sponsor Vite</a>
      <a className = {style.btn} href="#">Sponsor Tomas</a> */}
    </section>
    );
}