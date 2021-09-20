import {
  parse,
} from 'date-fns';

export class DateHelper {
  /**
     * This method receives a string data and parses it to extended format
     * @example DateHelper.parse('31/12/2020') // Result: Thu Dec 31 2020 00:00:00 GMT-0300 (Horário Padrão de Brasília)
     *
     * @param date - A string date in the following formats
     * @param parseFrom - The format in which the date is. defaults to dd/MM/yyyy
     * @returns a object date in extended format
     *
     */
  static parse(date: string, parseFrom: string = 'dd/MM/yyyy'): Date {
    return parse(date, parseFrom, new Date());
  }
}
