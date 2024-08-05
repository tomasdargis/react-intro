import logo from '/vite.svg'


const imgStyle={height: '15rem'};

export function Hero(){
    return(
        <section>
      <div>
        <h1>Vite Next Generation Fronted Tooling</h1>
        <p>Get ready for a development environment that can finally catch up with you.</p>
        <div>
          <a href="#">Get Started</a>
          <a href="#">Why Vite</a>
          <a href="#">View on GitHub</a>
          <a href="#"> ⚡️ ViteConf 24!</a>
        </div>
      </div>
      <img src={logo}style={imgStyle} alt="Vite Logo" />
    </section>
    );
}