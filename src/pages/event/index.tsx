import { CalendarLeft } from '../../entities/calendar';
import { EventForm } from '../../entities/event-details';
import { Divider } from '../../shared/ui';
import styles from './styles.module.scss'

function Event() {
   return (
      <div className={styles.wrapper}>
         <CalendarLeft />
         <Divider />
         <EventForm />
      </div>
   );
}

export default Event;
