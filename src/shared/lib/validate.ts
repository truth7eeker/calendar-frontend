const emailRegex = /^\S+@\S+\.\S+$/;

export const validateEmail = (email: string) => {
   let error;

   if (email === '') {
      error = "Can't be blank!";
   } else if (!emailRegex.test(email)) {
      error = 'Invalid email';
   } else {
      error = ''
   }

   return error;
};

export const validateName = (name: string) => {
   let error;

   if (name === '') {
      error = "Can't be blank!";
   } else {
      error = ''
   }

   return error
};
