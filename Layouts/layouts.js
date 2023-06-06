import styles from '@/Styles/layout.module.css';
const layouts = ({ children }) => {
  return (
    <div className="flex h-full bg-blue-200">
      <div className="m-auto bg-slate-50 rounded-md w-3/5 h-full grid grid-cols-2">
        <div className={styles.imgStyle}>
          <div className={styles.cartoonimg}></div>
        </div>
        <div className="right flex flex-col justify-evenly ">
          <div className="text-center py-40">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default layouts;
