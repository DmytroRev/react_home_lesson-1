import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const icons = {
  1: FaRegThumbsUp,
  2: MdPeople,
  3: MdOutlineProductionQuantityLimits,
  4: GiTreeDoor,
};

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <h3 className={style.title}>{title}</h3>

      <ul className={style.list}>
        {stats.map(item => (
          <li key={item.id} className={style.item}>
            <StatisticsItem data={item} icon={icons[item.id]} />
          </li>
        ))}
      </ul>
    </>
  );
};
