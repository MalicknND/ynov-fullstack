import styles from './index.module.scss';
import Logo from '../../../../public/images/logo/logo.svg';
import NavItem from '@/components/UI/NavItem';

const Index = () => {
  const menu = [
    {
      title: 'Home',
      link: './',
      className: styles.nav__item,
    },
    {
      title: 'About',
      link: './about',
      className: styles.nav__item,
    },
  ];

  return (
    //on utilise la librairie classnames pour ajouter des classes conditionnellement
    <div className={`${styles.wrapper} flex`}>
      <div className={styles.logo}>
        <img src={Logo.src} alt="Qonto" />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          {/* on utilise la méthode map pour afficher les éléments du tableau menu */}
          {menu.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Index;
