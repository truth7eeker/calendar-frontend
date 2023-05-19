import React, { useState } from 'react';
import { Input, MainBtn, setLocalStorage } from '../../../../shared';
import styles from './styles.module.scss';
import { TextArea } from '../../../../shared';
import { validateEmail, validateName } from '../../../../shared/lib/validate';
import { setForm } from '../../model/reducers';
import { useDispatch } from 'react-redux';
import { bookDate } from '../../api/bookDate';
import { IForm } from '../../model/reducers';
import { AppDispatch } from '../../../../app/store/store';

export function EventForm() {
   const dispatch = useDispatch<AppDispatch>();

   const [eventForm, setEventForm] = useState<IForm>({
      name: '',
      email: '',
      message: '',
      tg: ''
   });

   const [errors, setErrors] = useState({
      nameError: '',
      emailError: '',
      tgError: ''
   });

   const handleForm = (name: string, value: string) => {
      setEventForm((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   const handleValidation = () => {
      const nameErr = validateName(eventForm.name);
      const tgErr = validateName(eventForm.tg);
      const emailErr = validateEmail(eventForm.email);
      let isError;

      if (nameErr || emailErr || tgErr) {
         setErrors({
            nameError: nameErr,
            emailError: emailErr,
            tgError: tgErr
         });
         isError = true;
      } else {
         setErrors({ nameError: '', emailError: '', tgError: '' });
         isError = false;
         dispatch(setForm(eventForm));
         setLocalStorage('form', eventForm);
         dispatch(bookDate());
      }
      return isError;
   };

   return (
      <div>
         <h3>Enter Details</h3>
         <form className={styles.form}>
            <Input
               label="name"
               type="text"
               text="Name *"
               handleForm={handleForm}
               value={eventForm.name}
               error={errors.nameError}
            />
            <Input
               label="email"
               type="email"
               text="Email *"
               handleForm={handleForm}
               value={eventForm.email}
               error={errors.emailError}
            />
            <Input
               label="tg"
               type="text"
               text="Telegram *"
               handleForm={handleForm}
               value={eventForm.tg}
               error={errors.tgError}
            />
            <TextArea
               text="Please share anything that will help prepare for our meeting."
               label="message"
               value={eventForm.message}
               handleForm={handleForm}
            />
            <MainBtn
               text="Next"
               next="final-message"
               width="6rem"
               handleValidation={handleValidation}
               type="submit"
            />
         </form>
      </div>
   );
}
