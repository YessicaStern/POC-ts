import joi from "joi";
// fazer validações aqui de tamanho
const nameSchema= joi.string().required();
const cellSchema= joi.number().required();
const dateSchema= joi.date();

export {nameSchema,cellSchema,dateSchema};