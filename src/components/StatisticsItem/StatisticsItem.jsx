import style from './Statistics.module.css';

export const StatisticsItem = ({ data, icon: Icon }) => {
  return (
    <>
      <Icon />
      <span className={style.counter}>{data.total}</span>
      <p className={style.text}>{data.title}</p>
    </>
  );
};
