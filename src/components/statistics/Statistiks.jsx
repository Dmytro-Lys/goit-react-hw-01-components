import css from './Statistiks.module.css';
import PropTypes from "prop-types";
import clsx from "clsx";


export const Statistics = ({ title, stats }) => {
  return (<section className="statistics">
  <h2 className={css.title}>{title}</h2>
      <ul className={css["stat-list"]}>
    {stats.map(item =>(
        <li key={item.id} className={clsx(css.item, css[getStatClassName(item.label)])}>
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
    </li>
    ))}            
  </ul>
</section>)
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired
}

const getStatClassName = item => item.slice(1,item.length)