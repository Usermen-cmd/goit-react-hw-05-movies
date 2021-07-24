import { format } from 'date-fns';

export const setDate = isoSrting => {
  const date = Date.parse(isoSrting);
  const normalizeDate = format(new Date(date), "dd-MM-yyyy' 'HH:mm:ss");
  return normalizeDate;
};
