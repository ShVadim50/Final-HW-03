import styles from "./layout.module.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { 
  sortByPrice, 
  sortByDuration, 
  sortByTransfer 
} from "../../redux/Tickets/reducer";

const ButtonBlock: React.FC = () => {
  const dispatch = useDispatch();
  const [activeSort, setActiveSort] = useState('price');

  useEffect(() => {
    dispatch(sortByPrice());
  }, [dispatch]);

  const handleSort = (sortType: string, action: () => void) => {
    setActiveSort(sortType);
    action();
  };

  return (
    <div className={styles.block}>
      <button 
        className={`${styles.first} ${activeSort === 'price' ? styles.active : ''}`}
        onClick={() => handleSort('price', sortByPrice)}
      >
        Самый дешевый
      </button>
      <button 
        className={`${styles.second} ${activeSort === 'duration' ? styles.active : ''}`}
        onClick={() => handleSort('duration', sortByDuration)}
      >
        Самый быстрый
      </button>
      <button 
        className={`${styles.third} ${activeSort === 'connectionAmount' ? styles.active : ''}`}
        onClick={() => handleSort('connectionAmount', sortByTransfer)}
      >
        Самый оптимальный
      </button>
    </div>
  );
};

export default ButtonBlock;
