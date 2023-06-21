import styles from './Sobre.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import casa from 'assets/sobre/casa.png';
import massa1 from 'assets/sobre/massa1.png';
import massa2 from 'assets/sobre/massa2.png';

const imagens = [massa1, massa2];

export default function Sobre() {
  return (
    <section>
      <h3 className={stylesTema.titulo}> Sobre </h3>
      <div className={styles.sobreNos}>
        <img src={casa} alt="Casa Buon Gusto" />
        <div className={styles.sobreNos__texto}>
          <p>
            Bem-vindos ao Restaurante Italiano Buon Gusto!
          </p>
          <p>
            Você está convidado a embarcar em uma experiência gastronômica única, repleta de sabores autênticos da culinária italiana. No Buon Gusto, valorizamos a tradição, a qualidade dos ingredientes e a paixão pela comida.
          </p>
          <p>
            Combinando a riqueza dos molhos, a delicadeza das massas frescas e o sabor inconfundível dos queijos italianos, nossas receitas são preparadas com carinho e atenção aos detalhes. Acreditamos que a comida é uma forma de expressar amor, e nossos pratos refletem essa dedicação.
          </p>
        </div>
      </div>
      <div className={styles.imagens}>
        {imagens.map((imagem, index) => (
          <div key={index} className={styles.imagens__imagem}>
            <img src={imagem} alt="imagem de massa" />
          </div>
        ))}
      </div>
    </section>
  );
}