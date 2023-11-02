import css from './statistics.module.css';
// import propTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={css.stats}
              key={id}
              style={{ backgroundColor: colorCreate() }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const colorCreate = () => {
  const color =
    'rgba(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    0.4 +
    ')';

  return color;
};

// Statistics.propTypes = {
//   stats: propTypes.arrayOf(
//     propTypes.shape({
//       label: propTypes.string.isRequired,
//       percentage: propTypes.number.isRequired,
//     })
//   ).isRequired,
// };
