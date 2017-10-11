import { cons, car, cdr } from 'hexlet-pairs';

export const makeExpression = (operators, operation) => cons(operators, operation);

export const leftOperand = expr => car(car(expr));
export const rightOperand = expr => cdr(car(expr));
export const operatorString = expr => car(cdr(expr));
export const operation = expr => cdr(cdr(expr));
export const toString = expr => `${leftOperand(expr)} ${operatorString(expr)} ${rightOperand(expr)}`;
export const result = expr => operation(expr)(leftOperand(expr), rightOperand(expr));
