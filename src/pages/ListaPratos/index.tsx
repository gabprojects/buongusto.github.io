import styles from './ListaPratos.module.scss';
import { useNavigate } from 'react-router-dom';
import stylesTema from 'styles/Tema.module.scss';



export default function ListaPratos() {
  const navigate = useNavigate();
  return (
    <section>
      <h3 className={stylesTema.titulo}>
        Gestão de pratos
      </h3>
    </section>
  );
}