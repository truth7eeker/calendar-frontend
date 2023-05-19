import { Routing } from '../pages';
import { BrowserRouter } from 'react-router-dom';
import styles from './styles.module.scss';

function App() {
   return (
      <BrowserRouter>
         <div className={styles.wrapper}>
            <div className={styles.background}>
               <Routing />
            </div>
         </div>
      </BrowserRouter>
   );
}
export default App;
