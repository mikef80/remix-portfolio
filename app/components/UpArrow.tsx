const UpArrow = ({
  width = 24,
  height = 24,
  strokeWidth = 2,
  stroke = "#393939",
}) => (
  // iconmonstr.com - Angel Up
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeWidth={strokeWidth}
    className={`${stroke}`}
  >
    <path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z" />
  </svg>
);

export default UpArrow;
