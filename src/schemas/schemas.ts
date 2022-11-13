import joi from "joi";

const nameSchema= joi.string().required().min(3).max(100);
const cellSchema= joi.number().required().min(11);
const dateSchema= joi.date();

export {nameSchema,cellSchema,dateSchema};